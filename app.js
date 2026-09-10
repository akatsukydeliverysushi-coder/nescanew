let deferredPrompt=null;
const installBtn=document.querySelector("#installBtn"),scanBtn=document.querySelector("#scanBtn"),target=document.querySelector("#target"),status=document.querySelector("#status"),log=document.querySelector("#log");
if("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js");
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;installBtn.hidden=false});
installBtn.onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;installBtn.hidden=true};
scanBtn.onclick=()=>{const value=target.value.trim();if(!value){status.textContent="Informe um endereço";return}status.textContent="Solicitação preparada";log.textContent="Alvo informado: "+value+"\n\nPara segurança, o navegador não executa varredura direta de hosts. Conecte esta interface a um serviço local autorizado para realizar a descoberta.";};