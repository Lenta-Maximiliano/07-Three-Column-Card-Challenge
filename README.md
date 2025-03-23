# Solución al Desafío "3-column preview card component"

Esta es una solución para el desafío [3-column preview card component](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de desarrollo web mediante proyectos realistas.

## Tabla de Contenidos
- [Descripción General](#descripción-general)
  - [Enlaces](#enlaces)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características](#características)
- [Aprendizajes](#aprendizajes)
- [Autor](#autor)
- [¿Cómo Ejecutar Localmente?](#como-ejecutar-localmente)

---

## Descripción General

### Enlaces
- **URL del Sitio en Vivo**: [Ver sitio aquí](07-three-column-card-challenge.netlify.app)

---

## Tecnologías Utilizadas
- CSS con propiedades personalizadas
- [React](https://reactjs.org/) - Biblioteca para interfaces de usuario
- Flujo de trabajo basado en **Mobile First**

---

## Características
- Diseño completamente responsive para dispositivos móviles y escritorio.
- Componentes React modulares (Card, Footer, MainContainer).
- Estructura CSS limpia y reutilizable utilizando la metodología BEM.
- Mejores prácticas en diseño web responsive.

---

## Aprendizajes
En este proyecto, reforcé los siguientes conceptos:
- **Componentización en React**: Dividir la interfaz en componentes pequeños y reutilizables (por ejemplo, Card, Footer, MainContainer).
- **Convención de Nombres BEM**: Mantener una estructura de clases CSS clara y consistente.
- **Flujo de trabajo con Git**: Gestionar ramas (por ejemplo, `dev` y `main`) y realizar commits estructurados.

### Ejemplo de Código
Aquí tienes un ejemplo de cómo modularicé un componente en React:

```jsx

export default function MainContainer() {
  return (
    <section className="main-container">
      <Card
        id="sedans"
        image="/images/icon-sedans.svg"
        title="Sedans"
        description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        buttonClass="card__button--sedans"
      />
      <Card
        id="suvs"
        image="/images/icon-suvs.svg"
        title="SUVs"
        description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        buttonClass="card__button--suvs"
      />
      <Card
        id="luxury"
        image="/images/icon-luxury.svg"
        title="Luxury"
        description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        buttonClass="card__button--luxury"
      />
    </section>
  );
}
  
  
```

# Autor
- **Perfil en Frontend Mentor**: [Lenta, Maximiliano Carlos](https://www.frontendmentor.io/profile/Lenta-Maximiliano)
- **Perfil en GitHub**: [Lenta-Maximiliano](https://github.com/Lenta-Maximiliano)
- **LinkedIn**: [Lenta, Maximiliano Carlos](https://linkedin.com/in/Lenta-Maximiliano)

## Como Ejecutar Localmente

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/Lenta-Maximiliano/07-Three-Column-Card-Challenge.git

2. **Navega a la carpeta del proyecto:**
    ```bash
    cd 07-Three-Column-Card-Challenge

3. **Instala las dependencias:**
    ```bash
    npm install

4. **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev