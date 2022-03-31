// Debug
console.log('JS OK!');

// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) 
// e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, 
// visualizzare nome e immagine di ogni contatto

// Config
const app = new Vue({
    el: '#root',
    data: {
        contacts,
        activeChat: -1,
        newMessage: '',
    },
    methods: {
        setActiveChat(i) {
            this.activeChat = i;
        },
        getAvatar(i) {
            return 'img/avatar' + i + '.jpg';
        },
        getLastMsg(contact) {
            const messages = contact.messages;
            const lastMessages = messages[contact.messages.length - 1].message;
            return lastMessages;
        },
        checkStatus(message) {
            if (message.status === 'sent') {
                return 'sent';
            } else {
                return 'received';
            }
        },
        chatAvatar(contact) {
            return `img/avatar${contact.avatar}.jpg`;
        },
        sendMessage(activeChat) {
            const inputMessage = {
                message: this.newMessage,
                status: 'sent',
            };
            this.contacts[activeChat].messages.push(inputMessage);
            this.newMessage = '';
            setTimeout(this.okReply(activeChat), 1000);
        },
        okReply(activeChat) {
            const reply = {
                message: 'OK!',
                status: 'received',
            }
            this.contacts[activeChat].messages.push(reply);
        },
    }
})
