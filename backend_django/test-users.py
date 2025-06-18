import requests

BASE_URL = "http://localhost:8000/api"

token = None


def api_request(endpoint, method="GET", data=None, token=None):
    url = f"{BASE_URL}{endpoint}"

    headers = {}
    if token:
        headers["Authorization"] = f"Bearer {token}"

    if method == "GET":
        return requests.get(url, headers=headers)
    elif method == "POST":
        return requests.post(url, json=data, headers=headers)
    elif method == "PUT":
        return requests.put(url, json=data, headers=headers)
    elif method == "DELETE":
        return requests.delete(url, headers=headers)
    else:
        raise ValueError("Método HTTP no soportado")

def login():
    global token
    email= input("email: ")
    password = input("Contraseña: ")

    response = api_request("/token/", method="POST", data={
        "email": email,
        "password": password
    })

    if response.status_code == 200:
        token = response.json()["access"]
        print("Login exitoso.")
    else:
        print("Error en login:", response.text)

def ver_usuarios():
    response = api_request("/usuarios/", token=token)
    if response.status_code == 200:
        usuarios = response.json()
        for u in usuarios:
            print(f"[{u['id']}] {u['username']} - {u['email']}")
    else:
        print("❌ Error al obtener usuarios:", response.text)

def crear_usuario():
    username = input("Nombre de usuario: ")
    email = input("Email: ")
    password = input("Contraseña: ")
    password_confirm = input("Contraseña (confirmacion): ")

    response = api_request("/usuarios/", method="POST", data={
        "username": username,
        "email": email,
        "password": password,
        "password_confirm": password_confirm
    }, token=token)

    if response.status_code == 201:
        print("✅ Usuario creado.")
    else:
        print("❌ Error al crear usuario:", response.text)

def ver_usuario():
    user_id = input("ID del usuario: ")
    response = api_request(f"/usuarios/{user_id}/", token=token)
    if response.status_code == 200:
        usuario = response.json()
        print(f"Usuario: {usuario['username']}, Email: {usuario['email']}")
    else:
        print("❌ Usuario no encontrado:", response.text)

def editar_usuario():
    user_id = input("ID del usuario: ")
    username = input("Nuevo nombre de usuario: ")
    email = input("Nuevo email: ")

    response = api_request(f"/usuarios/{user_id}/", method="PUT", data={
        "username": username,
        "email": email
    }, token=token)

    if response.status_code == 200:
        print("✅ Usuario actualizado.")
    else:
        print("❌ Error al actualizar usuario:", response.text)

def eliminar_usuario():
    user_id = input("ID del usuario a eliminar: ")
    response = api_request(f"/usuarios/{user_id}/", method="DELETE", token=token)
    if response.status_code == 204:
        print("🗑️ Usuario eliminado.")
    else:
        print("❌ Error al eliminar usuario:", response.text)

def ver_perfil():
    user_id = input("ID del usuario: ")
    response = api_request(f"/usuarios/{user_id}/perfil/", token=token)
    if response.status_code == 200:
        print("✅ Perfil:")
        print(response.json())
    else:
        print("❌ Error al obtener el perfil.", response.text)

def cambiar_password():
    user_mail = input("ID del usuario: ")
    new_password = input("Nueva contraseña: ")
    new_password_confirm = input("Confirmar nueva contraseña: ")

    response = api_request(f"/usuarios/reset_password/", method="POST", data={
        'email': user_mail, 
        'password': new_password, 
        'password_confirm': new_password_confirm
    })

    if response.status_code == 200:
        print("🔒 Contraseña actualizada.")
    else:
        print("❌ Error al cambiar contraseña:", response.text)

def ver_estadisticas():
    response = api_request("/usuarios/estadisticas/", token=token)
    if response.status_code == 200:
        stats = response.json()
        print("📊 Estadísticas:", stats)
    else:
        print("❌ Error al obtener estadísticas:", response.text)

def menu_usuarios():
    login()

    while True:
        print("\n--- MENÚ USUARIOS API ---")
        print("1. Ver usuarios")
        print("2. Crear usuario")
        print("3. Ver un usuario")
        print("4. Editar usuario")
        print("5. Eliminar usuario")
        print("6. Ver perfil")
        print("7. Cambiar contraseña")
        print("8. Ver estadísticas")
        print("0. Salir")

        opcion = input("Opción: ")

        if opcion == "1":
            ver_usuarios()
        elif opcion == "2":
            crear_usuario()
        elif opcion == "3":
            ver_usuario()
        elif opcion == "4":
            editar_usuario()
        elif opcion == "5":
            eliminar_usuario()
        elif opcion == "6":
            ver_perfil()
        elif opcion == "7":
            cambiar_password()
        elif opcion == "8":
            ver_estadisticas()
        elif opcion == "0":
            print("Adiós.")
            break
        else:
            print("❗ Opción no válida.")



if __name__ == "__main__":
    menu_usuarios()