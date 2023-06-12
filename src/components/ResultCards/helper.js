import { decode } from "html-entities";

const getFirstImageUrl = (decodedContent) => {
    const images = decodedContent.match(/<img src="(.*?)"/m);
    return images ? images[1] : null;
};
  
const decodeContent = (markup) => {
    return decode(markup);
};
  
const removeAllTags = (content) => {
    return content.replace(/<.*?>/g, ' ');
};
  
export const getContent = (markup) => {
    const decodedContent = decodeContent(markup);
    const bgUrl = getFirstImageUrl(decodedContent);
    const content = removeAllTags(decodedContent).slice(0, 700) + '…';
  
    return {
        bgUrl,
        content,
    };
};