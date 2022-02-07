<template>

    <div class="popup shadow" data-draggable>

        <div class="popup_head" @mousedown="dragElem">
            <span class="popup_title">Popup title</span>
        </div>

        <div class="popup_content">
            <span>Lorem ipsum</span>
        </div>

        <div class="popup_bottom">

            <div class="buttons_grid">
                <div class="button primary">
                    <span>Confirm</span>
                    <i class="icon_check"></i>
                </div>
                <div class="button disabled">
                    <span>Dismiss</span>
                    <i class="icon_close"></i>
                </div>
            </div>

        </div>

    </div>

</template>


<script>

export default {
    data() {
        return {
            isDrag: false
        }
    },

    methods: {

        dragElem(event) {

            event.preventDefault()

            this.isDrag = true

            let handler = event.target
            let parent = handler.closest('[data-draggable]')

            let posY = parent.getBoundingClientRect().top;
            let posX = parent.getBoundingClientRect().left;

            let gapX = event.clientX - posX
            let gapY = event.clientY - posY


            document.addEventListener('mousemove', event => {

                if (this.isDrag) {

                    let mouseX = event.clientX
                    let mouseY = event.clientY

                    let newPosX = mouseX - gapX
                    let newPosY = mouseY - gapY

                    parent.style.left = newPosX + 'px'
                    parent.style.top = newPosY + 'px'
                    handler.style.cursor = 'grabbing'
                }

            });

            document.addEventListener('mouseup', event => {

                this.isDrag = false
                handler.style.cursor = 'grab'

                console.log('isdrag: ' + this.isDrag)

            });

        }


    }
}

</script>
