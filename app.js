const btnGardien = document.querySelector("#btnGardien")
const formGardien = document.createElement("form")
const labels = ["prenom", "nom", "date", "email", "phone", "adresseGardien"]
const labelsText = ["Prénom", "Nom", "Date de naissance", "Email", "Téléphone", "Adresse"]
const inputType = ["name", "name", "date", "email", "phone", "text", "submit"]
const inputName = ["prenom", "nom", "date", "email", "adresseGardien", "text"]
const dateName = ["jour", "mois", "annee"]
const header =  $('header')

let bHide = true
let jours = []
let mois = [ "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
"Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre" ]
let annee = []


jQuery('<div/>', {"id": 'divGardien'}).appendTo(header)
const divGardien = $('#divGardien')
divGardien.append(formGardien)
divGardien.remove()

formGardien.action=""
formGardien.method = "get"
formGardien.class = "formGardien"

function fillDate(){

    jours.length = 31
    for(let i = 0; i < jours.length; i++)
    {
        jours[i] = i+1
    }

    annee.length = 100
    for(let i = 0; i < annee.length; i++)
    {
        var date = new Date().getFullYear()
        annee[i] = date-i
    }
}

function setupForm()
{
    for(let i = 0; i < 7; i++)
    {
        jQuery('<div/>', {"class": 'formGardien', "id":labels[i]}).appendTo(formGardien)
        if(i < 7)
        {
            let divFormGardien = document.querySelectorAll("div.formGardien")

            jQuery('<label>', {"for": labels[i], "text": labelsText[i]}).appendTo(divFormGardien[i])
            jQuery('<input>', {"type": inputType[i], "name": inputName[i], "id": inputName[i]}).appendTo(divFormGardien[i])
            $("input").attr("required", true);
        }
        else
        {
            jQuery('<input>', {"name": inputType[i], "value": "Envoyer"}).appendTo(divFormGardien[i])
        }
    }
}

function setupDate(){

    divDate = $('#date')
    $('input#date').remove()

    for(let i = 0; i < 3; i++)
    {
        console.log("assignation des select")
        $('<select/>', {"name": dateName[i], "size": 1, "class": "selectDate"}).appendTo(divDate)
    }

    let selectDate = $('.selectDate')

    for(let i = 0; i < annee.length; i++)
    {
        if(i < jours.length)
        {
            jQuery('<option>', {"text": jours[i]}).appendTo(selectDate[0])
        }

        if(i < mois.length)
        {
            jQuery('<option>', {"text": mois[i]}).appendTo(selectDate[1])
        }

        jQuery('<option>', {"text": annee[i]}).appendTo(selectDate[2])
    }
}

fillDate()
setupForm()
setupDate()


function deviensGardien(){

    if(!bHide)
    {
        divGardien.remove()
    }
    else{
        header.append(divGardien)
    }

    bHide = !bHide
}

btnGardien.addEventListener('click', deviensGardien)