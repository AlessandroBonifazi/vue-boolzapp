// Debug
console.log('JS OK!');

// Config
const app = new Vue({
    el: '#root',
    data: {
        contacts,
        activeChat: -1,
        newMessage: '',
        search: '',
        mouse: false,
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
            setTimeout(this.autoReply, 1000, activeChat);
        },
        autoReply(activeChat) {
            const reply = {
                message: 'OK!',
                status: 'received',
            }
            this.contacts[activeChat].messages.push(reply);
        },
        searchChat() {
            const input = this.search.toLowerCase();
            for (let i = 0; i < this.contacts.length; i++) {
                const contactName = this.contacts[i].name.toLowerCase();
                if (contactName.includes(input)) {
                    this.contacts[i].visible = true;
                } else if (!contactName.includes(input)) {
                    this.contacts[i].visible = false;
                }
            }
        },
        getTimeLastMsg(contact) {
            const messages = contact.messages;
            const lastMessageDate = messages[contact.messages.length - 1].time;
            return lastMessageDate;
        },
        deleteMessage(i) {
            this.contacts[this.activeChat].messages.splice(i, 1);
        },
    }
})
