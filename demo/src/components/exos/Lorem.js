export function Lorem({limit, schapsum}) {
    const defaultText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tempor metus. Donec sagittis sit amet nisl eget sagittis. Praesent et est pellentesque, ultrices odio eu, mollis dui. Nam aliquam metus vel ex eleifend condimentum. Suspendisse nulla ante, hendrerit ut quam eget, pretium faucibus orci. Cras imperdiet congue feugiat. Aliquam pharetra, ex ut vehicula suscipit, nisi enim placerat enim, eu viverra quam est eu mauris. In hac habitasse platea dictumst. Etiam non odio a magna cursus molestie. Donec et iaculis justo';
    const schapsumText = "Lorem Elsass ipsum amet réchime lotto-owe sed s'guelt quam. mamsell dolor eget munster suspendisse chambon und nüdle rucksack hop Carola hopla Racing. Oberschaeffolsheim senectus ornare rhoncus auctor, Christkindelsmärik Gal ! ornare Kabinetpapier in, semper adipiscing yeuh. ch'ai Salu bissame ac Morbi Strasbourg gravida geïz hopla pellentesque purus lacus Yo dû. merci vielmols amet vielmols, blottkopf, Chulien dignissim hopla amet, schpeck sagittis habitant turpis, porta non sed picon bière knack condimentum bredele nullam";
    let text = '';
    
    if (schapsum === true) {
        text = limit ? schapsumText.substring(0, limit) : schapsumText;
    } else {
        text = limit ? defaultText.substring(0, limit) : defaultText;
    }

    return <p>{ text }</p>
}

