export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "Zabit Etemi & Anes Ferati & Bryan Volkmann",
            "formList": [
                {
                    "id": "activityform",
                    "title": "Activities",
                    "url": "/activity",
                    "formFieldList": [
                        {
                           "id": "friend",
                           "type": "autocomplete",
                            "name": "Friends",
                            "url": "/activity/:activityKey/friend",
                            "form": "Friendform",
                            "width": 2 
                        },
                   
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                    {
                    "id": "name",
                    "type": "text",
                    "name": "ActivityName",
                    "width": 2,
                    "required": true
                    },
                    {
                        "id": "date",
                        "type": "date",
                        "name": "Date",
                        "width": 2
                    },
                    {
                        "id": "comment",
                        "type": "text",
                        "name": "Comments",
                        "width": 2,
                        "height": 4,
                        "maxLength": 5000,
                    },
                    {
                    "type": "deleteButton",
                    "name": "Delete"
                    },
                    {
                    "type": "cancelButton",
                    "name": "Cancel"
                    },

                    {
                    "type": "okButton",
                    "name": "Ok"
                    }
                    ]
                   },
                {
                    "id": "GroupForm",
                    "title": "Group",
                    "url": "/group",
                    "formFieldList": [
                    {
                    "id": "name",
                    "type": "text",
                    "name": "GroupName",
                    "width": 2,
                    "required": true
                    },
                    {
                        "id": "date",
                        "type": "date",
                        "name": "Date",
                        "width": 2
                    },
                    {
                        "id": "comment",
                        "type": "text",
                        "name": "Comments",
                        "width": 2,
                        "height": 4,
                        "maxLength": 5000,
                    },
                    {
                    "type": "deleteButton",
                    "name": "Delete"
                    },
                    {
                    "type": "cancelButton",
                    "name": "Cancel"
                    },
                    {
                    "type": "okButton",
                    "name": "Ok"
                    }
                    ]
                   },
                   
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [
                        {
                            "id": "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "url": "/group",
                            "form": "GroupForm",
                            "width": 2
                           },
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                    
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": true
                           },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/friend/:friendKey/activity",
                            "form": "activityform",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "activity",
                            "type": "text",
                            "name": "Activityname",
                            "url": "/location/:locationKey/activity",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "activityform",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
            ],
            "pageList": [

                {
                    "id": "activitypage",
                    "elementList": [
                    {
                        "type": "list",
                        "icon": "fa-weixin",
                        "color": "red",
                        "search": true,
                        "url": "/activity",
                        "form": {
                        "form": "activityform"}
                    },
                    {
                    "type": "newButton",
                    "name": "New Activity",
                    "icon": "fa-weixin",
                    "color": "red",
                    "form": {
                    "form": "activityform"
                    }
                    }
                    ]
                   },

                {
                    "id": "groupspage",
                    "elementList": [
                        {
                            "type": "list",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "search": true,
                            "url": "/group",
                            "form": {
                            "form": "GroupForm"
                            }
                            },
                           
                    {
                    "type": "backbutton",
                    },
                    {
                    "type": "newButton",
                    "name": "NewGroup",
                    "icon": "fa-weixin",
                    "color": "green",
                    "form": {
                    "form": "GroupForm"
                    }
                    }
                    ]
                   },
                   


                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "page": "groupspage",
                           },
                           {
                            "type": "button",
                            "name": "Activities",
                            "icon": "fa-weixin",
                            "color": "green",
                            "page": "activitypage",
                           },
                           
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },
                    ]
                    
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/friend",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "url": "/location",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                    ]
                },
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
