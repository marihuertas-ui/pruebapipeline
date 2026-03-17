const { suma } = require('./app');

console.log("🧪 Ejecutando pruebas...");

if (suma(2, 2) === 4) {
    console.log("✅ Test correcto");
    process.exit(0);
} else {
    console.log("❌ Test falló");
    process.exit(1);
}
