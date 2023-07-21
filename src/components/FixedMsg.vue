<template>
    <div class="fixedMsg">
        <div class="phone">
            <div class="phonein1">
                <div class="phonein2">
                    <div class="phonein3"></div>
                </div>
            </div>
        </div>
        <div class="message">
            <div class="messagein1"><svg width="34" height="36" viewBox="0 0 34 36" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 13.2222C0 5.91979 5.91979 0 13.2222 0H20.7778C28.0802 0 34 5.91979 34 13.2222V22.5C34 26.5674 31.9834 30.4471 28.9007 33C26.4489 35.0304 23.5 36 20.5 36L20 33.8056H15.1111C7.80868 33.8056 0 29.8024 0 22.5L0 13.2222Z"
                        fill="white" />
                </svg>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FixedMsg',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped>
.fixedMsg {
    width: 60px;
    height: 130px;
    display: flex;
    position: fixed;
    right: 20px;
    top: 70%;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
}

.phone {
    width: 60px;
    cursor: pointer;
    height: 58px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    border-radius: 23px;
    background: rgba(225, 196, 169, 1);
}
.dot{
    width: 6px;
    height: 6px;
    border-radius: 50%;
    top: 20px;
    left: 27px;
    position: absolute;
    background: rgba(225, 196, 169, 1);
}
.dot:nth-child(2){
    top: 30px;
}

.message {
    width: 60px;
    cursor: pointer;
    height: 58px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    border-radius: 23px;
    background: rgba(225, 196, 169, 1);
}
.messagein1{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.phonein1 {
    width: 36px;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    border-radius: 14px;
    background: rgba(255, 255, 255, 1);
}

.phonein2 {
    width: 16px;
    height: 26px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background: rgba(225, 196, 169, 1);
}

.phonein3 {
    width: 4px;
    margin-bottom: 2px;
    height: 4px;
    background: white;
    border-radius: 48px;
}</style>