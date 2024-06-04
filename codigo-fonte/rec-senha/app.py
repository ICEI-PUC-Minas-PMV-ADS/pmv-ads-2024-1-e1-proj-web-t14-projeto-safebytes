from flask import Flask, request, render_template, redirect, url_for
from flask_mail import Mail, Message
import random
import sqlite3
import datetime
from dotenv import load_dotenv
import os

# Carregar variáveis de ambiente a partir do arquivo config-var.env
dotenv_path = os.path.join(os.path.dirname(__file__), 'config-var.env')
if not os.path.exists(dotenv_path):
    print("Arquivo config-var.env não encontrado!")
else:
    load_dotenv(dotenv_path)
    print(f"Carregando variáveis de ambiente do arquivo: {dotenv_path}")

# Verificar se as variáveis de ambiente estão sendo carregadas
mail_server = os.getenv('MAIL_SERVER')
mail_port = os.getenv('MAIL_PORT')
mail_username = os.getenv('MAIL_USERNAME')
mail_password = os.getenv('MAIL_PASSWORD')
mail_use_tls = os.getenv('MAIL_USE_TLS')
mail_use_ssl = os.getenv('MAIL_USE_SSL')

print(f"MAIL_SERVER: {mail_server}")
print(f"MAIL_PORT: {mail_port}")
print(f"MAIL_USERNAME: {mail_username}")
print(f"MAIL_PASSWORD: {mail_password}")
print(f"MAIL_USE_TLS: {mail_use_tls}")
print(f"MAIL_USE_SSL: {mail_use_ssl}")

if not all([mail_server, mail_port, mail_username, mail_password, mail_use_tls, mail_use_ssl]):
    raise ValueError("Uma ou mais variáveis de ambiente não estão definidas corretamente.")

app = Flask(__name__)

# Configurações do servidor de e-mail
app.config['MAIL_SERVER'] = mail_server
app.config['MAIL_PORT'] = int(mail_port)
app.config['MAIL_USERNAME'] = mail_username
app.config['MAIL_PASSWORD'] = mail_password
app.config['MAIL_USE_TLS'] = mail_use_tls == '1'
app.config['MAIL_USE_SSL'] = mail_use_ssl == '1'

mail = Mail(app)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

def generate_code():
    return str(random.randint(1000, 9999))

@app.route('/')
def index():
    return render_template('email_input.html')

@app.route('/send-code', methods=['POST'])
def send_code():
    email = request.form['email']
    code = generate_code()
    timestamp = datetime.datetime.now()

    conn = get_db_connection()
    conn.execute('INSERT INTO password_resets (email, code, timestamp) VALUES (?, ?, ?)',
                 (email, code, timestamp))
    conn.commit()
    conn.close()

    msg = Message('Password Reset Code', sender=mail_username, recipients=[email])
    msg.body = f'Your password reset code is {code}.'
    mail.send(msg)

    return render_template('code_verification.html', email=email)

@app.route('/verify-code', methods=['POST'])
def verify_code():
    email = request.form['email']
    code = ''.join([
        request.form['code1'],
        request.form['code2'],
        request.form['code3'],
        request.form['code4']
    ])

    conn = get_db_connection()
    cur = conn.execute('SELECT * FROM password_resets WHERE email = ? AND code = ?',
                       (email, code))
    reset_request = cur.fetchone()

    if reset_request and (datetime.datetime.now() - reset_request['timestamp']).seconds < 3600:
        return 'Código verificado com sucesso, agora você pode redefinir sua senha.'
    else:
        return 'Invalid or expired code', 400

if __name__ == '__main__':
    app.run(debug=True)
