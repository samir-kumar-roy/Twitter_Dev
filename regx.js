let incomingTagList = ['excited', 'career','fun','javascript'];
let alreadyPresent=['fun','career'];
let response = incomingTagList.filter(value=>!alreadyPresent.includes(value))
console.log(response); 