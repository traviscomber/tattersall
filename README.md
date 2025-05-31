# NeuraLIA E-Commerce - Plataforma de Agentes IA para Retail Online Chile

NeuraLIA E-Commerce es una plataforma especializada de agentes IA diseñada específicamente para retailers chilenos. Despliega agentes inteligentes que manejan atención al cliente, optimización de ventas, gestión de inventario y experiencias de compra personalizadas para potenciar el rendimiento de tu e-commerce.

## Características

- 🤖 **Sistema Multi-Agente**: Crea y gestiona múltiples agentes IA
- 💬 **Chat en Tiempo Real**: Interfaz de chat interactiva con respuestas en streaming
- ⚙️ **Configuración de Agentes**: Personaliza comportamiento, personalidad y capacidades
- 📊 **Panel de Analíticas**: Monitorea rendimiento de agentes y conversaciones
- 🔧 **Integración de Herramientas**: Conecta agentes a herramientas y APIs externas
- 🎨 **UI Moderna**: Interfaz hermosa y responsiva construida con Next.js y Tailwind CSS
- 🛍️ **Características Enfocadas en E-Commerce**:
  - **Agente de Atención al Cliente**: Servicio al cliente automatizado 24/7 para pedidos, devoluciones y consultas
  - **Agente de Optimización de Ventas**: Recomendaciones de productos y optimización de conversiones con IA
  - **Agente de Gestión de Inventario**: Monitoreo inteligente de stock y pronóstico de demanda
  - **Agente de Compras Personales**: Descubrimiento personalizado de productos y recomendaciones
  - **Agente de Marketing Digital**: Estrategias de marketing automatizadas y análisis de campañas

## Comenzando

### Prerrequisitos

- Node.js 18+ 
- npm o yarn
- Clave API de OpenAI
- Base de datos Neon

### Instalación

1. Clona el repositorio:
\`\`\`bash
git clone https://github.com/tuusuario/neuralia-ecommerce.git
cd neuralia-ecommerce
\`\`\`

2. Instala las dependencias:
\`\`\`bash
npm install
\`\`\`

3. Configura las variables de entorno:
\`\`\`bash
cp .env.local.example .env.local
\`\`\`

4. Agrega tus claves API a \`.env.local\`:
\`\`\`
OPENAI_API_KEY=tu_clave_openai_aqui
DATABASE_URL=tu_url_neon_aqui
\`\`\`

5. Ejecuta el servidor de desarrollo:
\`\`\`bash
npm run dev
\`\`\`

6. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Despliegue

### Desplegar en Vercel

1. Sube tu código a GitHub
2. Conecta tu repositorio a Vercel
3. Agrega tus variables de entorno en el panel de Vercel
4. ¡Despliega!

[![Desplegar con Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tuusuario/neuralia-ecommerce)

### Variables de Entorno para Producción

\`\`\`
OPENAI_API_KEY=tu_clave_openai_produccion
DATABASE_URL=tu_url_base_datos_produccion
\`\`\`

## Uso

### Creando un Agente

1. Navega al Panel
2. Haz clic en "Nuevo Agente"
3. Configura la personalidad, capacidades y prompt del sistema de tu agente
4. Comienza a chatear con tu agente

### Configuración de Agentes

- **Personalidad**: Elige entre profesional, amigable, casual, formal o creativo
- **Temperatura**: Controla la aleatoriedad de respuestas (0-2)
- **Tokens Máximos**: Establece la longitud máxima de respuesta
- **Prompt del Sistema**: Define el rol y comportamiento del agente
- **Herramientas**: Habilita acceso a herramientas externas

### Comunicación de Agentes

Los agentes pueden comunicarse entre sí a través de:
- Mensajería directa
- Orquestación de flujos de trabajo
- Interacciones basadas en eventos
- Memoria y contexto compartido

## Referencia API

### API de Chat

\`\`\`typescript
POST /api/chat
{
  "messages": [...],
  "agentId": "1" // 1=Soporte, 2=Ventas, 3=Inventario, 4=Compras, 5=Marketing
}
\`\`\`

### API de Configuración de Agentes

\`\`\`typescript
PUT /api/agents/:id/config
{
  "personality": "profesional",
  "temperature": 0.7,
  "systemPrompt": "Prompt personalizado...",
  "enabledTools": ["busquedaPedidos", "catalogoProductos"]
}
\`\`\`

## Contribuir

1. Haz fork del repositorio
2. Crea una rama de característica (\`git checkout -b feature/caracteristica-increible\`)
3. Confirma tus cambios (\`git commit -m 'Agregar característica increíble'\`)
4. Sube a la rama (\`git push origin feature/caracteristica-increible\`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## Soporte

Para soporte, envía un email a soporte@neuralia.cl o únete a nuestra [comunidad Discord](https://discord.gg/neuralia).

## Casos de Uso

- **Retailers de Moda**: Recomendaciones de estilo personal y guía de tallas
- **Tiendas de Electrónicos**: Soporte técnico y comparaciones de productos
- **Hogar y Jardín**: Gestión de inventario estacional y recomendaciones de proyectos
- **Belleza y Cosméticos**: Combinación personalizada de productos y tutoriales
- **Deportes y Fitness**: Recomendaciones de equipamiento y consejos de entrenamiento

---

**Transforma tu negocio e-commerce con agentes IA que trabajan 24/7 para aumentar ventas, mejorar la satisfacción del cliente y optimizar operaciones.**
