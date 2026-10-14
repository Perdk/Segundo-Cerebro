const { app, BrowserWindow } = require("electron");
const criarJanela = () => {
  const janela = new BrowserWindow({ width: 800, height: 600 });
  janela.loadFile("codigo/index.hmtl");
};
app.whenReady().then(criarJanela);
