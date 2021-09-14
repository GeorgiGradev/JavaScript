function edit(ref, match, replacer){
    let matcher = new RegExp(match, 'g'); 
    const result = ref.textContent.replace(matcher, replacer);
    ref.textContent = result;
  }