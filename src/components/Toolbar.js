
const Toolbar = Quill => {
    const FontStyle = Quill.import('attributors/style/font');
    const SizeStyle = Quill.import('attributors/style/size');
  
    // Define la lista de fuentes
    const fonts = ['Arial', 'Verdana', 'Times New Roman', 'Courier New'];
  
    // Agrega atributos de estilo para fuente y tamaño
    Quill.register(FontStyle, true);
    Quill.register(SizeStyle, true);
  
    class Toolbar extends Quill.Toolbar {
      constructor() {
        super(...arguments);
  
        const fontPicker = this.container.querySelector('.ql-font');
        if (fontPicker) {
          fonts.forEach(font => {
            const option = document.createElement('option');
            option.textContent = font;
            option.value = font;
            fontPicker.appendChild(option);
          });
  
          fontPicker.addEventListener('change', () => {
            const font = fontPicker.value;
            const range = this.quill.getSelection();
            if (range) {
              this.quill.format('font', font);
            }
          });
        }
      }
    }
  
    Quill.Toolbar = Toolbar;
  };
  
  export default Toolbar;