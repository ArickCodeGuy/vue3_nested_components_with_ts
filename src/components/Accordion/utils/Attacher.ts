/**
 * @description Attaches source element (elementToAttach) to target (targetElement). Uses document scroll listeners to update attached element position
 */

export default class {
  #src: HTMLElement;
  #target: HTMLElement;
  handleScroll: () => void;

  constructor(elementToAttach: HTMLElement, targetElement: HTMLElement) {
    this.#src = elementToAttach;
    this.#target = targetElement;

    this.handleScroll = this.onScroll.bind(this);
  }

  attach() {
    const { top, left, height } = this.#target.getBoundingClientRect();
    const verticalOffset = 8;

    const calculatedTop = top + height + verticalOffset;

    this.#src.style.position = 'fixed';
    this.#src.style.top = `${calculatedTop}px`;
    this.#src.style.left = `${left}px`;
  }

  onScroll() {
    console.log('attacher onScroll');
    this.attach();
  }

  init() {
    console.log('attacher init');
    this.attach();
    document.addEventListener('scroll', this.handleScroll);
  }

  destroy() {
    console.log('attacher destroy');
    document.removeEventListener('scroll', this.handleScroll);
  }
}
