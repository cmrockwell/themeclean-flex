module.exports = {
    convert: function($, f) {
    	f.wrap($, 'themecleanflex-components-block')
        f.bindAttribute($.parent(),'model','model')

        //Content Container
        let containerClasses = `{
            'md:flex-row': model.mediaposition === 'before',
            'md:flex-row-reverse': model.mediaposition === 'after',
            'enlarge-text': model.isprimary === 'true'
        }`
        f.bindAttribute(  $,  'class', containerClasses, false)

        //Media
        let mediaDiv  = $.find('.img-wrapper').first()
        f.addIf( mediaDiv, "model.showmedia === 'true'")
        f.bindAttribute( mediaDiv, 'style', "{flex:`0 0 ${model.mediawidth}%`}")
        f.replace( $.find('img'), '<themecleanflex-components-media :model="model"></themecleanflex-components-media>')

        //Text
        let textClasses = `{
            'text-left': model.aligncontent === 'left',
            'text-center': model.aligncontent === 'center',
            'text-right': model.aligncontent === 'right',
            'self-start': model.aligncontent === 'left',
            'self-center': model.aligncontent === 'center',
            'self-end': model.aligncontent === 'right'
        }`

        let textDiv = $.find('div>div>div').first()
        f.bindAttribute( textDiv, 'class', textClasses, false)
        f.addStyle( textDiv, 'width', 'model.textwidth', '%')

        f.addIf($.find('h1').first(), "model.showtitle === 'true'")
        f.addIf($.find('h2').first(), "model.showsubtitle === 'true'")

        f.addIf($.find('p').first(), "model.showtext === 'true'")
        f.mapInlineRichField($.find('h1').first(), "model.title")
        f.mapInlineRichField($.find('h2').first(), "model.subtitle")
        f.mapInlineRichField($.find('p').first(), "model.text")

        //Buttons
        let buttonsDiv = $.find('.flex-wrap').first()
        let link = buttonsDiv.find('a').first()
        let buttonsClasses = `{
            'justify-start': model.alignbuttons === 'start',
            'justify-center': model.alignbuttons === 'center',
            'justify-end': model.alignbuttons === 'end'
        }`
        let aClasses = `{
            'btn-lg': model.buttonsize === 'large',
            'btn-sm': model.buttonsize === 'small',
            'btn-primary': item.buttoncolor === 'primary',
            'btn-secondary': item.buttoncolor === 'secondary',
            'btn-green': item.buttoncolor === 'success',
            'btn-red': item.buttoncolor === 'danger',
            'btn-orange': item.buttoncolor === 'warning',
            'btn-white': item.buttoncolor === 'light',
            'btn-black': item.buttoncolor === 'dark'
        }`

        f.addFor( link, 'model.buttons')
        f.bindAttribute( link, 'href', f.pathToUrl('item.buttonlink'))
        f.bindAttribute( link, 'class', aClasses, false)
        f.mapInlineRichField( link, 'model.buttons', "buttontext")
        f.addStyle( link, 'backgroundColor', 'item.buttoncolor')
        f.addStyle( link, 'borderColor', 'item.buttoncolor')

        f.addIf( buttonsDiv, 'model.showbutton == \'true\'')
        f.bindAttribute( buttonsDiv, 'class', buttonsClasses, false)

        f.addElse($)
        $.parent().prepend('<div class="p-5" v-if="isEditAndEmpty">no content defined for component</div>')
    }
}
