const CounterManager = {
  count: 0,
  counterDisplay: null,
  statusBadge: null,

  init() {
    this.counterDisplay = document.getElementById('counter-display');
    this.statusBadge = document.getElementById('counter-status-badge');

    const incrementBtn = document.getElementById('btn-increment');
    const decrementBtn = document.getElementById('btn-decrement');
    const resetBtn = document.getElementById('btn-reset');

    if (incrementBtn) {
      incrementBtn.addEventListener('click', () => this.updateCount(this.count + 1));
    }
    if (decrementBtn) {
      decrementBtn.addEventListener('click', () => this.updateCount(this.count - 1));
    }
    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.updateCount(0));
    }

    this.render();
  },

  updateCount(newVal) {
    this.count = newVal;
    this.render();

    if (this.counterDisplay) {
      this.counterDisplay.classList.add('pulse');
      setTimeout(() => {
        this.counterDisplay.classList.remove('pulse');
      }, 150);
    }
  },

  render() {
    if (!this.counterDisplay || !this.statusBadge) {
      return;
    }

    this.counterDisplay.textContent = this.count;

    if (this.count === 0) {
      this.statusBadge.textContent = 'Стан: 0 (Початок)';
    } else if (this.count % 2 === 0) {
      this.statusBadge.textContent = 'Парне значення';
    } else {
      this.statusBadge.textContent = 'Непарне значення';
    }
  },
};

const InspectorManager = {
  viewportElem: null,
  deviceElem: null,
  refreshBtn: null,

  init() {
    this.viewportElem = document.getElementById('val-viewport');
    this.deviceElem = document.getElementById('val-device');
    this.refreshBtn = document.getElementById('btn-refresh-inspector');

    this.updateViewport();
    window.addEventListener('resize', () => this.updateViewport());

    if (this.refreshBtn) {
      this.refreshBtn.addEventListener('click', () => {
        this.updateViewport();
      });
    }
  },

  updateViewport() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (this.viewportElem) {
      this.viewportElem.textContent = `${width}px × ${height}px`;
    }

    if (this.deviceElem) {
      if (width < 640) {
        this.deviceElem.textContent = 'Mobile Viewport (< 640px)';
      } else if (width < 1024) {
        this.deviceElem.textContent = 'Tablet Viewport (640px – 1024px)';
      } else {
        this.deviceElem.textContent = 'Desktop Viewport (> 1024px)';
      }
    }
  },
};

const KeyboardManager = {
  init() {
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        return;
      }

      if (e.key === '+' || e.key === '=') {
        CounterManager.updateCount(CounterManager.count + 1);
      } else if (e.key === '-' || e.key === '_') {
        CounterManager.updateCount(CounterManager.count - 1);
      }
    });
  },
};

document.addEventListener('DOMContentLoaded', () => {
  CounterManager.init();
  InspectorManager.init();
  KeyboardManager.init();
});
