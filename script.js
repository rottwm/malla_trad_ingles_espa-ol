document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    if (ramo.classList.contains('bloqueado')) return;

    ramo.classList.add('aprobado');
    ramo.removeEventListener('click', arguments.callee);

    // Revisar y desbloquear otros ramos
    document.querySelectorAll('.ramo.bloqueado').forEach(r => {
      const prerequisitos = r.dataset.prerequisitos.split(',').map(p => p.trim());
      const todosCumplidos = prerequisitos.every(pid =>
        document.querySelector(`.ramo[data-id="${pid}"]`)?.classList.contains('aprobado')
      );
      if (todosCumplidos) {
        r.classList.remove('bloqueado');
      }
    });
  });
});

