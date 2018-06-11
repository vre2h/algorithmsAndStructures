const friendList = new Map();

friendList.set('vrezh', ['hovo', 'bob']);
friendList.set('bob', []);
friendList.set('hovo', ['jenny', 'mary']);
friendList.set('mary', ['jack']);
friendList.set('jack', []);

const isName = name => name.includes('h');

const bfSearch = (name) => {
  const searched = [];
  const searchQue = [];
  searchQue.push(...friendList.get(name));

  while (searchQue.length !== 0) {
    const person = searchQue.shift();
    console.log(searchQue, person);
    if (!searched.includes(person)) {
      if (isName(person)) {
        console.log(`${person} is a mango seller!`);
        return true;
      }

      searchQue.push(...friendList.get(person) || []);
      searched.push(person);
    }
  }

  return null;
};

export default bfSearch;
