function showSubject(sub) {
    document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => {
      t.className = 'nav-tab';
    });
    document.getElementById('content-' + sub).classList.add('active');
    const tab = document.getElementById('tab-' + sub);
    tab.classList.add('active-' + sub);
  }

  function showUnit(subj, unit) {
    const content = document.getElementById('content-' + subj);
    content.querySelectorAll('.unit-content').forEach(u => u.classList.remove('active'));
    content.querySelectorAll('.unit-tab').forEach(t => {
      t.classList.remove('active');
      ['cao','math','python','physics'].forEach(s => t.classList.remove(s));
    });
    document.getElementById(subj + '-' + unit).classList.add('active');
    event.target.classList.add('active', subj);
  }

  function toggleCard(card) {
    card.classList.toggle('open');
  }

  function showLearnUnit(subj, unit, btn) {
    // hide ALL learn unit contents inside this learn-section only
    const section = btn.closest('.learn-section');
    section.querySelectorAll('.learn-unit-content').forEach(el => {
      el.classList.remove('active-learn-content');
    });
    // deactivate all learn unit buttons in this section
    section.querySelectorAll('.learn-unit-btn').forEach(b => {
      b.classList.remove('active-learn');
      b.style.background = '';
      b.style.color = '';
    });
    // show selected & activate button
    document.getElementById(subj + '-' + unit).classList.add('active-learn-content');
    btn.classList.add('active-learn');
  }

  function scrollToContent() {
    document.getElementById('mainnav').scrollIntoView({ behavior: 'smooth' });
    return false;
  }

  // Animate progress bars on load
  window.addEventListener('load', () => {
    document.querySelectorAll('.prog-fill').forEach(bar => {
      const w = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => bar.style.width = w, 300);
    });
  });
