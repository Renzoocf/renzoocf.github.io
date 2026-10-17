(() => {
  'use strict';

  // ---- Tema claro / oscuro ----
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeBtn');
  let theme = 'light';
  applyTheme(theme);

  function applyTheme(t) {
    theme = t;
    if (t === 'dark') { root.setAttribute('data-theme', 'dark'); themeBtn.textContent = '☀'; }
    else { root.removeAttribute('data-theme'); themeBtn.textContent = '☾'; }
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', () => applyTheme(theme === 'dark' ? 'light' : 'dark'));
  }

  // ---- Command palette ----
  const cmdkOverlay = document.getElementById('cmdkOverlay');
  const cmdkInput = document.getElementById('cmdkInput');
  const cmdkList = document.getElementById('cmdkList');
  const cmdkTrigger = document.getElementById('cmdkTrigger');

  const commands = [
    { label: 'Ir a Inicio', hint: 'Sección', action: () => scrollToId('top-anchor') },
    { label: 'Ir a Sobre mí', hint: 'Sección', action: () => scrollToId('sobre-mi') },
    { label: 'Ir a Stack tecnológico', hint: 'Sección', action: () => scrollToId('stack') },
    { label: 'Ir a Proyectos', hint: 'Sección', action: () => scrollToId('proyectos') },
    { label: 'Ir a Contacto', hint: 'Sección', action: () => scrollToId('contacto') },
    { label: 'Cambiar a modo oscuro', hint: 'Tema', action: () => applyTheme('dark') },
    { label: 'Cambiar a modo claro', hint: 'Tema', action: () => applyTheme('light') },
    { label: 'Copiar email de contacto', hint: 'Contacto', action: () => navigator.clipboard?.writeText('renzoo.cf@gmail.com') },
    { label: 'Abrir blog personal', hint: 'Enlace', action: () => window.open('https://renzooucf.github.io/RenzoOs/', '_blank') },
    { label: 'Abrir GitHub', hint: 'Enlace', action: () => window.open('https://github.com/renzooucf', '_blank') },
    { label: 'Abrir LinkedIn', hint: 'Enlace', action: () => window.open('https://www.linkedin.com/in/renzo-retuerto-70076b350/', '_blank') },
  ];

  function scrollToId(id) {
    const el = document.getElementById(id) || document.querySelector('header.site');
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  let activeIndex = 0;
  let filtered = commands;

  function renderList() {
    if (!cmdkList) return;
    cmdkList.innerHTML = '';
    if (filtered.length === 0) {
      cmdkList.innerHTML = '<div class="cmdk-empty">Sin resultados. Prueba con "tema", "contacto" o el nombre de una sección.</div>';
      return;
    }
    filtered.forEach((cmd, i) => {
      const item = document.createElement('div');
      item.className = 'cmdk-item' + (i === activeIndex ? ' active' : '');
      item.innerHTML = `<span>${cmd.label}</span><span class="k">${cmd.hint}</span>`;
      item.addEventListener('mouseenter', () => { 
        activeIndex = i; 
        Array.from(cmdkList.children).forEach(c => c.classList.remove('active'));
        item.classList.add('active');
      });
      item.addEventListener('click', () => runCommand(cmd));
      cmdkList.appendChild(item);
    });
  }

  function runCommand(cmd) {
    cmd.action();
    closeCmdk();
  }

  function openCmdk() {
    if (!cmdkOverlay || !cmdkInput) return;
    cmdkOverlay.classList.add('open');
    cmdkInput.value = '';
    filtered = commands;
    activeIndex = 0;
    renderList();
    setTimeout(() => cmdkInput.focus(), 10);
  }

  function closeCmdk() {
    cmdkOverlay?.classList.remove('open');
  }

  cmdkTrigger?.addEventListener('click', openCmdk);
  cmdkOverlay?.addEventListener('click', (e) => { if (e.target === cmdkOverlay) closeCmdk(); });

  cmdkInput?.addEventListener('input', () => {
    const q = cmdkInput.value.trim().toLowerCase();
    filtered = commands.filter(c => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q));
    activeIndex = 0;
    renderList();
  });

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      cmdkOverlay?.classList.contains('open') ? closeCmdk() : openCmdk();
    }
    if (!cmdkOverlay?.classList.contains('open')) return;
    if (e.key === 'Escape') closeCmdk();
    if (e.key === 'ArrowDown') { e.preventDefault(); activeIndex = Math.min(activeIndex + 1, filtered.length - 1); renderList(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); activeIndex = Math.max(activeIndex - 1, 0); renderList(); }
    if (e.key === 'Enter' && filtered[activeIndex]) { runCommand(filtered[activeIndex]); }
  });

  // ---- Mensaje en consola ----
  console.log(
    '%c> whoami',
    'font-family:monospace;color:#BE4A28;font-size:13px;'
  );
  console.log(
    '%cRenzo Retuerto — Ingeniero de software.\nSi estás leyendo esto, probablemente también revisas el código antes de creer en el diseño. Hablemos: renzoo.cf@gmail.com',
    'font-family:monospace;color:#55503F;font-size:12px;line-height:1.6;'
  );

  // ---- Menú móvil ----
  const burgerBtn = document.getElementById('burgerBtn');
  const mobilePanel = document.getElementById('mobilePanel');
  if (burgerBtn && mobilePanel) {
    burgerBtn.addEventListener('click', () => {
      const open = mobilePanel.classList.toggle('open');
      burgerBtn.setAttribute('aria-expanded', open);
    });
    mobilePanel.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobilePanel.classList.remove('open');
        burgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Arrastrar franja horizontal ----
  const strip = document.getElementById('dragStrip');
  if (strip) {
    let isDown = false, startX, scrollLeft;
    strip.addEventListener('pointerdown', (e) => {
      isDown = true;
      strip.classList.add('dragging');
      startX = e.pageX - strip.offsetLeft;
      scrollLeft = strip.scrollLeft;
    });
    window.addEventListener('pointerup', () => { isDown = false; strip.classList.remove('dragging'); });
    strip.addEventListener('pointerleave', () => { isDown = false; strip.classList.remove('dragging'); });
    strip.addEventListener('pointermove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - strip.offsetLeft;
      strip.scrollLeft = scrollLeft - (x - startX) * 1.4;
    });
  }

  // ---- Pestañas de proyectos ----
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('[data-panel]');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.querySelector(`[data-panel="${btn.dataset.tab}"]`)?.classList.add('active');
    });
  });

  // ---- Revelado al hacer scroll (Optimizado) ----
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        // Unobserve para liberar memoria una vez revelado
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // ---- Formulario de contacto (AJAX Silencioso) ----
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name?.value.trim();
      const email = form.email?.value.trim();
      const message = form.message?.value.trim();
      if (!name || !email || !message) {
        if(formMsg) formMsg.textContent = 'Completa todos los campos.';
        return;
      }
      
      if(formMsg) formMsg.textContent = 'Enviando mensaje...';
      
      fetch("https://formsubmit.co/ajax/renzoo.cf@gmail.com", {
          method: "POST",
          headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify({ nombre: name, email: email, mensaje: message })
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              if(formMsg) formMsg.textContent = '¡Mensaje enviado con éxito!';
              form.reset();
          } else {
              if(formMsg) formMsg.textContent = 'Hubo un error al enviar.';
          }
      })
      .catch(error => {
          if(formMsg) formMsg.textContent = 'Hubo un error de conexión.';
          console.error(error);
      });
    });
  }

  // ---- Botón de copiar email ----
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard?.writeText('renzoo.cf@gmail.com');
      const originalText = copyEmailBtn.innerHTML;
      copyEmailBtn.innerHTML = '¡Correo copiado! <span class="arrow">✓</span>';
      setTimeout(() => {
        copyEmailBtn.innerHTML = originalText;
      }, 2000);
    });
  }

})();
