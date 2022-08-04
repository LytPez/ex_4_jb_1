
const tagSelect=document.querySelector('select')

tagSelect.addEventListener('change',alteracao)


function alteracao(){  
  const select=document.getElementById('selecionar')  

  const posicaoDoOptionSelecionado=select.selectedIndex

  const optionSelecionado= select.options[posicaoDoOptionSelecionado]

  const valor= optionSelecionado.value
  
  console.log(valor)

  if(valor==='Título'){
    let titulo=document.getElementsByTagName('title')[0].textContent='uau'    
      
    } else if(valor==='Status'){
      let statuss=window.status='gh'
      console.log(statuss)
  }
  
}



