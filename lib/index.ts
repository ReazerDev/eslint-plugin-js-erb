module.exports.processors = {
  '.erb': {
    preprocess: (text: string) => {
      const startOfLineRegex = /^<%.*%>$/gm;
      debugger;
      text = text.split('\n').filter((line) => { 
        return line.search(startOfLineRegex) == -1;
      }).join('\n')

      return [text];
    },
    postprocess: (messages: string[]) => messages[0],
  },
};
