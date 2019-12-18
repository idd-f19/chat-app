
/* message data */

const user = {
    id: 456,
    name: 'Charles Babbage',
    img: 'img/456.jpg'
 }
 
 const message = [
    {
       id: 1,
       from: {
          id: 123,
          name: 'Ada Lovelace',
          img: 'img/123.jpg'
       },
       time: {
          date: 1,
          month: 8,
          year: 1843,
          hour: 14,
          minute: 59
       },
       text: `You should check out this little script I just wrote. 😂 lol`
    }
 ]
 

    /* functions */

    function getMessageAsHtmlString(message) {
        return `<article>
                    <p>${message.text}</p>
                </article>`;
    }

    function renderConversation(arr) {

        const arrOfHtml = arr.map(getMessageAsHtmlString);
        const strOfHtml = arrOfHtml.join('\n');
        document.getElementById('messages').innerHTML = strOfHtml;
    }
/* Execute */
    renderConversation(message);
