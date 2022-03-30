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
        // activeChat: null,
    },
    methods: {
        setActiveChat(i) {
            let activeChat = i;
            // this.activeChat = ;
            console.log(activeChat);
        },
        getAvatar(i) {
            return 'img/avatar' + i + '.jpg';
        },
        getLastMsg(contact) {
            const messages = contact.messages;
            const lastMessages = messages[contact.messages.length - 1].message;
            return lastMessages;
        },
    }
})
