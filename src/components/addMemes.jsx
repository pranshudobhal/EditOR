import axios from 'axios';

export const AddMemes = ({ editor }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  if (!editor) {
    return null;
  }

  const getMemeFromAPI = async (keyword) => {
    try {
      if (!keyword) return;

      const {
        data: { results },
      } = await axios.get(`https://g.tenor.com/v1/search?q=${keyword}&key=${API_KEY}&limit=1`);

      const memeURL = results[0]?.media[0]?.gif.url;

      return { memeURL };
    } catch (error) {
      console.error('Error fetching meme', error);
    }
  };

  const setMeme = async () => {
    try {
      //get editor content
      let editorContent = editor.getHTML();

      //check if valid meme exists using regex
      const [wholeMatchedWord, memeToBeSearched] = editorContent.match(/\{\{(.+?)_meme\}\}/);

      //get meme from API
      const { memeURL } = await getMemeFromAPI(memeToBeSearched);

      //set meme in editor
      if (wholeMatchedWord && memeToBeSearched) {
        editorContent = editorContent.replace(wholeMatchedWord, `<img src=${memeURL} />`);

        editor.commands.setContent(editorContent);

        editor.chain().focus().setImage({ src: memeURL }).run();
      }
    } catch (error) {
      alert('No meme found! Try Again!!!');
    }
  };

  return (
    <>
      <button className="btn btn-text" onClick={() => setMeme()}>
        Add Meme
      </button>
    </>
  );
};
