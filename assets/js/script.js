// script.js - JSCalhas
// Módulos de funcionalidades: serviços, galeria, orçamento, avaliação, slider, accordion, animações etc.

document.addEventListener('DOMContentLoaded', () => {
  // ---------- MENU HAMBURGUER / NAVBAR STICKY ----------
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
  // Fechar menu ao clicar em link
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.background = '#0F172A';
      header.style.backdropFilter = 'blur(0px)';
    } else {
      header.style.background = 'rgba(15, 23, 42, 0.85)';
      header.style.backdropFilter = 'blur(12px)';
    }
  });
  
  // ---------- SERVIÇOS (cards dinâmicos) ----------
  const servicosData = [
    { icon: 'fa-gutter', titulo: 'Instalação de Calhas', desc: 'Calhas em alumínio, aço galvanizado e cobre, com máxima eficiência no escoamento.' },
    { icon: 'fa-water', titulo: 'Instalação de Rufos', desc: 'Proteção contra infiltrações em encontros de telhados e paredes.' },
    { icon: 'fa-hard-hat', titulo: 'Instalação de Telhas', desc: 'Telhas cerâmicas, metálicas e de fibrocimento com alta durabilidade.' },
    { icon: 'fa-tools', titulo: 'Manutenção de Telhados', desc: 'Revisão completa, troca de telhas quebradas e impermeabilização.' },
    { icon: 'fa-broom', titulo: 'Limpeza de Calhas', desc: 'Remoção de folhas e detritos, prevenindo entupimentos e vazamentos.' },
    { icon: 'fa-clock', titulo: 'Reparos Emergenciais', desc: 'Atendimento rápido para goteiras e danos estruturais urgentes.' }
  ];
  
  const servicosGrid = document.getElementById('servicosGrid');
  if (servicosGrid) {
    servicosData.forEach(serv => {
      const card = document.createElement('div');
      card.className = 'service-card';
      card.innerHTML = `
        <i class="fas ${serv.icon}"></i>
        <h3>${serv.titulo}</h3>
        <p>${serv.desc}</p>
        <a href="#orcamento" class="btn-saiba">Saiba Mais →</a>
      `;
      servicosGrid.appendChild(card);
    });
  }
  
  // ---------- DIFERENCIAIS ----------
  const diferenciaisArr = [
    { icon: 'fa-bolt', titulo: 'Atendimento Rápido', txt: 'Deslocamos equipe em até 24h' },
    { icon: 'fa-user-check', titulo: 'Profissionais Qualificados', txt: 'Treinamento contínuo' },
    { icon: 'fa-shield-alt', titulo: 'Garantia dos Serviços', txt: '2 anos de garantia' },
    { icon: 'fa-cubes', titulo: 'Materiais de Qualidade', txt: 'Fornecedores certificados' },
    { icon: 'fa-calculator', titulo: 'Orçamento Gratuito', txt: 'Sem compromisso' },
    { icon: 'fa-headset', titulo: 'Suporte ao Cliente', txt: 'Pós-venda dedicado' }
  ];
  const diffGrid = document.getElementById('diferenciaisGrid');
  if(diffGrid) {
    diferenciaisArr.forEach(d => {
      const div = document.createElement('div');
      div.className = 'diff-item';
      div.innerHTML = `<i class="fas ${d.icon}"></i><h4>${d.titulo}</h4><p>${d.txt}</p>`;
      diffGrid.appendChild(div);
    });
  }
  
  // ---------- PROCESSO (timeline) ----------
  const etapas = ['Solicitação de Contato', 'Avaliação Técnica', 'Orçamento', 'Execução do Serviço', 'Entrega Final'];
  const timelineDiv = document.getElementById('timeline');
  if(timelineDiv) {
    etapas.forEach((etapa, idx) => {
      const step = document.createElement('div');
      step.className = 'timeline-step';
      step.innerHTML = `<div class="step-number">${idx+1}</div><h4>${etapa}</h4><p>${idx===0 ? 'Ligação ou formulário' : idx===1 ? 'Vistoria no local' : idx===2 ? 'Proposta detalhada' : idx===3 ? 'Instalação segura' : 'Limpeza e garantia'}</p>`;
      timelineDiv.appendChild(step);
    });
  }
  
  // ---------- GALERIA PROJETOS ----------
  const projetos = [
    { categoria: 'calhas', img: 'https://tse1.mm.bing.net/th/id/OIP.Y9Un6-M5hoz8jCMF27UjlAHaEH?rs=1&pid=ImgDetMain&o=7&rm=3', alt: 'Calhas residenciais' },
    { categoria: 'rufos', img: 'https://casaeconstrucao.org/wp-content/uploads/2021/10/o-que-e-rufo-pingadeira-1.jpg', alt: 'Instalação de rufos' },
    { categoria: 'telhados', img: 'https://arkpad.com.br/wp-content/uploads/2022/01/TELHA-COLONIAL75.jpg', alt: 'Telhado cerâmico' },
    { categoria: 'calhas', img: 'https://th.bing.com/th/id/R.fa7952b70ec4d2ee1b6dee11167168ce?rik=uxeqjLTmtOSW2w&riu=http%3a%2f%2fcardivem.com.br%2fimagens%2finformacoes%2fcalha-aluminio-03.jpg&ehk=%2bj6fFTII3ohmsHaFIT9x2fdob179iz1iMS%2fWa6eq75Q%3d&risl=&pid=ImgRaw&r=0', alt: 'Calhas de alumínio' },
    { categoria: 'telhados', img: 'https://img.freepik.com/fotos-premium/parte-superior-do-telhado-de-fundo-industrial-estruturas-de-telhado-de-edificio-industrial-estrutura-de-telhado-industrial-fundo-e-textura-de-estruturas-de-aco-e-lampada_38810-9627.jpg?w=1380', alt: 'Telhado industrial' },
    { categoria: 'rufos', img: 'https://4.bp.blogspot.com/-BF67zlL2OOM/WUxGYIc_kFI/AAAAAAAABac/ldntT5QE5wQvxCVSafwKExiB2HmEZNCmACLcBGAs/s1600/IMG_20170531_150028326.jpg', alt: 'Rufo em cobertura' }
  ];
  
  const galeriaGrid = document.getElementById('galeriaGrid');
  function renderGaleria(filtro = 'todos') {
    if(!galeriaGrid) return;
    galeriaGrid.innerHTML = '';
    const filtrados = filtro === 'todos' ? projetos : projetos.filter(p => p.categoria === filtro);
    filtrados.forEach(proj => {
      const item = document.createElement('div');
      item.className = 'galeria-item';
      item.innerHTML = `<img src="${proj.img}" alt="${proj.alt}" loading="lazy">`;
      item.addEventListener('click', () => {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImg');
        modal.style.display = 'block';
        modalImg.src = proj.img;
      });
      galeriaGrid.appendChild(item);
    });
  }
  renderGaleria('todos');
  
  const filtrosBtns = document.querySelectorAll('.filtro-btn');
  filtrosBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filtrosBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGaleria(btn.getAttribute('data-filter'));
    });
  });
  
  // Modal imagem
  const modal = document.getElementById('imageModal');
  const closeModal = document.querySelector('.close-modal');
  if(closeModal) {
    closeModal.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if(e.target === modal) modal.style.display = 'none'; });
  }
  
  // ---------- SIMULADOR ORÇAMENTO + WHATSAPP ----------
  const formOrc = document.getElementById('formOrcamento');
  const resultadoDiv = document.getElementById('calcInfo');
  const valorSpan = document.getElementById('valorEstimado');
  const btnZap = document.getElementById('btnZapOrc');
  let ultimaEstimativa = { texto: '', valor: 0, area: 0, servico: '' };
  
  if(formOrc) {
    formOrc.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = document.getElementById('nomeOrc').value;
      const whats = document.getElementById('whatsOrc').value;
      const cidade = document.getElementById('cidadeOrc').value;
      const servico = document.getElementById('servicoOrc').value;
      const comprimento = parseFloat(document.getElementById('comprimento').value) || 0;
      const largura = parseFloat(document.getElementById('largura').value) || 0;
      const area = comprimento * largura;
      
      if(!nome || !whats || !cidade || !servico) {
        resultadoDiv.innerHTML = '⚠️ Preencha nome, WhatsApp, cidade e tipo de serviço.';
        valorSpan.innerHTML = '';
        btnZap.disabled = true;
        return;
      }
      
      let basePreco = 0;
      if(servico.includes('Calhas')) basePreco = 85;
      else if(servico.includes('Rufos')) basePreco = 75;
      else if(servico.includes('Telhas')) basePreco = 110;
      else if(servico.includes('Manutenção')) basePreco = 65;
      else basePreco = 45;
      
      let valorEstimado = 0;
      let areaExibida = area;
      if(area > 0) {
        valorEstimado = area * basePreco;
      } else {
        valorEstimado = basePreco * 40; // estimativa mínima
        areaExibida = 40;
      }
      valorEstimado = Math.round(valorEstimado);
      resultadoDiv.innerHTML = `📐 Área estimada: ${areaExibida.toFixed(1)} m²<br>🛠️ Serviço: ${servico}`;
      valorSpan.innerHTML = `R$ ${valorEstimado.toLocaleString('pt-BR')}`;
      
      ultimaEstimativa = { texto: `*Cliente:* ${nome}\n*WhatsApp:* ${whats}\n*Cidade:* ${cidade}\n*Serviço:* ${servico}\n*Área aproximada:* ${areaExibida.toFixed(1)} m²\n*Valor estimado:* R$ ${valorEstimado.toLocaleString('pt-BR')}\n*Obs:* ${document.getElementById('obsOrc').value || 'Nenhuma'}`, valor: valorEstimado, area: areaExibida, servico: servico };
      btnZap.disabled = false;
    });
  }
  
  if(btnZap) {
    btnZap.addEventListener('click', () => {
      if(ultimaEstimativa.texto) {
        const msg = `Olá TelhaPrime! Gostaria de solicitar um orçamento:\n${ultimaEstimativa.texto}\n\n*Este é um orçamento estimado. Aguardo confirmação após avaliação técnica.*`;
        const url = `https://wa.me/5511987654321?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
      } else {
        alert('Calcule a estimativa primeiro.');
      }
    });
  }
  
  // ---------- AGENDAMENTO AVALIAÇÃO ----------
  const formAvaliacao = document.getElementById('formAvaliacao');
  if(formAvaliacao) {
    formAvaliacao.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = document.getElementById('avNome').value;
      const telefone = document.getElementById('avTelefone').value;
      const endereco = document.getElementById('avEndereco').value;
      const cidade = document.getElementById('avCidade').value;
      const data = document.getElementById('avData').value;
      const horario = document.getElementById('avHorario').value;
      if(nome && telefone && endereco && cidade && data && horario) {
        alert(`✅ Avaliação agendada com sucesso!\n\n${nome}, receberemos nossa equipe no dia ${data} às ${horario} no endereço ${endereco}, ${cidade}. Em breve entraremos em contato para confirmar.`);
        formAvaliacao.reset();
        // modal suave já simulado
        const modalSimples = document.createElement('div');
        modalSimples.style.position='fixed'; modalSimples.style.bottom='20px'; modalSimples.style.right='20px'; modalSimples.style.background='#0F172A'; modalSimples.style.color='white'; modalSimples.style.padding='16px'; modalSimples.style.borderRadius='20px'; modalSimples.innerText='✅ Agendamento solicitado! Entraremos em contato.';
        document.body.appendChild(modalSimples);
        setTimeout(() => modalSimples.remove(), 3000);
      } else {
        alert('Preencha todos os campos.');
      }
    });
  }
  
  // ---------- SLIDER DE DEPOIMENTOS (Automático) ----------
  const depoimentos = [
    { nome: 'Carlos Souza', estrelas: 5, texto: 'Profissionais excelentes, resolveram o problema do telhado em tempo recorde. Recomendo!', foto: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { nome: 'Mariana Lima', estrelas: 5, texto: 'Calhas instaladas com perfeição, nota 10 para a equipe e pós-venda impecável.', foto: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { nome: 'Roberto Alves', estrelas: 5, texto: 'Atendimento rápido, orçamento gratuito e serviço de alta qualidade. Minha cobertura está nova.', foto: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { nome: 'Fernanda Rocha', estrelas: 4, texto: 'Muito caprichosos e materiais de primeira. Só demorou um pouco mas valeu a pena.', foto: 'https://randomuser.me/api/portraits/women/90.jpg' }
  ];
  const sliderContainer = document.getElementById('sliderDepoimentos');
  let currentDepo = 0;
  if(sliderContainer) {
    function buildSlider() {
      const sliderDiv = document.createElement('div');
      sliderDiv.className = 'depo-slider';
      depoimentos.forEach(d => {
        const card = document.createElement('div');
        card.className = 'depoimento-card';
        let stars = '';
        for(let i=0; i<d.estrelas; i++) stars += '<i class="fas fa-star"></i>';
        for(let i=d.estrelas; i<5; i++) stars += '<i class="far fa-star"></i>';
        card.innerHTML = `<img src="${d.foto}" style="width:70px; height:70px; border-radius:50%; object-fit:cover; margin-bottom:10px;"><h4>${d.nome}</h4><div>${stars}</div><p>"${d.texto}"</p>`;
        sliderDiv.appendChild(card);
      });
      sliderContainer.innerHTML = '';
      sliderContainer.appendChild(sliderDiv);
      let startX = 0;
      sliderContainer.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; });
      sliderContainer.addEventListener('touchend', (e) => { });
      
      setInterval(() => {
        currentDepo = (currentDepo + 1) % depoimentos.length;
        sliderDiv.style.transform = `translateX(-${currentDepo * 100}%)`;
      }, 5000);
    }
    buildSlider();
  }
  
  // ---------- ACCORDION FAQ ----------
  const faqData = [
    { pergunta: 'Quanto custa uma instalação?', resposta: 'O valor varia conforme o tipo de serviço e metragem. Utilize nosso simulador de orçamento para uma estimativa.' },
    { pergunta: 'Vocês atendem toda a região?', resposta: 'Atendemos Grande São Paulo, interior e litoral. Consulte nossa equipe.' },
    { pergunta: 'Existe garantia?', resposta: 'Sim, garantia mínima de 2 anos sobre execução e materiais.' },
    { pergunta: 'Fazem manutenção periódica?', resposta: 'Oferecemos planos de manutenção preventiva para calhas e telhados.' },
    { pergunta: 'Trabalham com telhas metálicas?', resposta: 'Sim, somos especialistas em telhas metálicas, cerâmicas e termoacústicas.' }
  ];
  const accordionDiv = document.getElementById('accordionFaq');
  if(accordionDiv) {
    faqData.forEach((faq, idx) => {
      const item = document.createElement('div');
      item.className = 'accordion-item';
      item.innerHTML = `
        <div class="accordion-header">${faq.pergunta} <i class="fas fa-chevron-down"></i></div>
        <div class="accordion-content"><p>${faq.resposta}</p></div>
      `;
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');
      header.addEventListener('click', () => {
        const isOpen = content.style.maxHeight;
        document.querySelectorAll('.accordion-content').forEach(c => { c.style.maxHeight = null; });
        if(!isOpen) content.style.maxHeight = content.scrollHeight + 'px';
      });
      accordionDiv.appendChild(item);
    });
  }
  
  // SCROLL REVEAL SIMPLES (fade-in)
  const revealElements = document.querySelectorAll('.section, .service-card, .diff-item, .timeline-step');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.5s ease';
    observer.observe(el);
  });
  
  // botão top bar orçamento e outros links suaves
  const btnOrcTop = document.getElementById('btnOrcamentoTop');
  if(btnOrcTop) btnOrcTop.addEventListener('click', (e) => { e.preventDefault(); document.getElementById('orcamento').scrollIntoView({behavior: 'smooth'}); });
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if(targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // parallax suave na hero
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if(hero) {
      const scrolled = window.scrollY;
      hero.style.backgroundPositionY = `${scrolled * 0.3}px`;
    }
  });
  
  // Ajustes finais: garantir que todos os ícones de serviços adaptem (fallback)
  const allIcons = document.querySelectorAll('.service-card .fas');
  if(allIcons.length && allIcons[0].classList.contains('fa-gutter') === false) {
    // corrigir ícones
    const iconMap = ['fa-tint', 'fa-water', 'fa-hard-hat', 'fa-tools', 'fa-broom', 'fa-clock'];
    document.querySelectorAll('.service-card .fas').forEach((ic, idx) => {
      if(idx < iconMap.length) ic.className = `fas ${iconMap[idx]}`;
    });
  }
  
  // prevent form reset strange
  console.log('TelhaPrime site carregado com sucesso!');
});
