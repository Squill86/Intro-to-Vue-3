app.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div>
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
    </div>`,
    data() {
        return {
            details: ['50% cotton', '30% wool', '20% polyester']
        }
    }
})