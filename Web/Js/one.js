$(document).ready(function (){

    $('#top_card_button').on('click',function click(){

        const dfd = $.ajax({

            url: 'https://raw.githubusercontent.com/mondalsubhadip212/Test/master/Json/one.json',
            type: 'GET',
            dataType: 'json',
        })

        dfd.done(function(data){

            $('#table').load('../Html/two.html',function (){

                $.each(data.people,function (index,value){

                    $('#table_bottom').append('    <tr id="table-body">\n' +
                        '        <td id="table-body-one">\n' +
                        value['name'] +        '\n' +
                        '        </td>\n' +
                        '        <td id="table-body-two">\n' +
                        value['age'] +        '\n' +
                        '        </td>\n' +
                        '        <td id="table-body-three">\n' +
                        value['place'] +        '\n' +
                        '        </td>\n' +
                        '    </tr>')
                })
            })
        })

        dfd.fail(function(){

            alert('Something Went Wrong :(')
        })
    })
})