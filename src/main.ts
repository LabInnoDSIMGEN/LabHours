/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.onEnterLayer('clockZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup","Il est : " + time,[]);
    })

    WA.room.onEnterLayer('welcomeZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("welcomePopup","Bienvenue au LAB Hours du LAB Inno --",[]);
    })

    WA.room.onEnterLayer('indicationBoardZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("boardZonePopup","Zone Zone de discussion coaching design",[]);
    })

    WA.room.onEnterLayer('indicationLoungeZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("boardLoungeZone","Zone de discussion Lab Innovation",[]);
    })

    WA.room.onEnterLayer('indicationChillZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("boardChillZone","Zone de discussion Evènements du Lab",[]);
    })

    WA.room.onEnterLayer('indicationSilentZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("boardSilentZone","Zone de déconnexion",[]);
    })

    WA.room.onEnterLayer('indicationOfficeZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("boardOfficeZone","Zone de discussion Explorations / Expérimentation",[]);
    })

    WA.room.onEnterLayer('indicationMeetingRoom').subscribe(() => {
        currentPopup = WA.ui.openPopup("boardMeetingRoom","Salle d'ateliers",[]);
    })

    WA.room.onEnterLayer('indicationLibraryResources').subscribe(() => {
        currentPopup = WA.ui.openPopup("boardLibraryResources","Boîte à ressources du Lab",[]);
    })

    WA.room.onLeaveLayer('clockZone').subscribe(closePopUp)
    WA.room.onLeaveLayer('welcomeZone').subscribe(closePopUp)
    WA.room.onLeaveLayer('indicationBoardZone').subscribe(closePopUp)
    WA.room.onLeaveLayer('indicationLoungeZone').subscribe(closePopUp)
    WA.room.onLeaveLayer('indicationChillZone').subscribe(closePopUp)
    WA.room.onLeaveLayer('indicationSilentZone').subscribe(closePopUp)
    WA.room.onLeaveLayer('indicationOfficeZone').subscribe(closePopUp)
    WA.room.onLeaveLayer('indicationMeetingRoom').subscribe(closePopUp)
    WA.room.onLeaveLayer('indicationLibraryResources').subscribe(closePopUp)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
