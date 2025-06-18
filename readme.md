# 🐱 Paracetamiau

> **Una plataforma web interactiva para el bienestar integral**

Paracetamiau es una aplicación diseñada para acompañar a los usuarios en su crecimiento personal, promoviendo el autocuidado, la educación en salud y el desarrollo de hábitos saludables de manera integral y personalizada.

## ✨ Características Principales

🎯 **Seguimiento emocional**: Registro y análisis de emociones y estados de ánimo  
💡 **Recomendaciones personalizadas**: Sugerencias de autocuidado adaptadas a cada usuario  
📚 **Educación en salud**: Información confiable sobre bienestar emocional y físico  
🌟 **Desarrollo de hábitos**: Herramientas para crear y mantener rutinas saludables

## 🏗️ Arquitectura del Proyecto

```
Paracetamiau/
├── 📁 backend_django/          # API REST con Django
├── 📁 emociones/
├── 📁 habitos/
├── 📁 quiz/
├── 📁 retroalimentacion/
├── 📁 usuarios/
│   ├── 📄 manage.py
│   ├── 📄 KatIA.py
│   ├── 📄 test-users.py
│   ├── 📄 requirements.txt
├── 📁 frontend_react/          # Interfaz de usuario con React
│   ├── 📁 context/
│   ├── 📁 src/
│   |     ├── 📁 api/
│   |     ├── 📁 assets/
│   |     ├── 📁 components/
│   |     ├── 📁 pages/
│   |     ├── 📁 styles/
│   |     ├── 📄 main.jsx
│   └── 📁 public/
│   ├── 📄 vite.config.js
│   ├── 📄 package.json
└── 📄 README.md
└── 📄 .gitignore
```

## 🛠️ Stack Tecnológico

### Backend

- **Python 3.9+** - Lenguaje de programación
- **Django 4.x** - Framework web
- **Django REST Framework** - API REST
- **SQLite** (desarrollo) / **PostgreSQL** (producción)

### Frontend

- **React 18+** - Biblioteca de interfaz de usuario
- **Axios** - Cliente HTTP
- **React Router DOM** - Enrutamiento
- **Context API** - Gestión de estado

## 🚀 Instalación y Configuración

### Prerrequisitos

- Python 3.9 o superior
- Node.js 16+ y npm
- Git

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/paracetamiau.git
cd paracetamiau
```

### 2. Configurar el Backend

```bash
# Navegar al directorio del backend
cd backend_django

# Crear entorno virtual
python -m venv ambv_paracetamiau

# Activar entorno virtual
# En Linux/Mac:
source ambv_paracetamiau/bin/activate
# En Windows:
ambv_paracetamiau\Scripts\activate

# Instalar dependencias
pip install -r requirements.txt

# Configurar base de datos
python manage.py migrate

# Iniciar servidor de desarrollo
python manage.py runserver
```

El backend estará disponible en: `http://localhost:8000`

### 3. Configurar el Frontend

```bash
# En una nueva terminal, navegar al frontend
cd frontend_react

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El frontend estará disponible en: `http://localhost:5173`

## 🌐 API Endpoints

| Endpoint              | Descripción             |
| --------------------- | ----------------------- |
| `/api/usuarios/`      | usuarios                |
| `/api/emociones/`     | emociones               |
| `/api/habitos/`       | habitos                 |
| `/api/quiz/`          | Preguntas               |
| `/api/token/`         | obtencion de token      |
| `/api/token/refresh/` | refrezcar token         |
| `/admin/`             | panel de administracion |

## 👥 Equipo

Desarrollado con ❤️ por el equipo de Paracetamiau - farmacodeCats

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella!** ⭐
