"use strict";
{
 

    globalThis.C3.Plugins.EMI_INDO_CloudFirestore.Instance = class CloudFirestoreInstance extends globalThis.ISDKInstanceBase
    {
        constructor()
        {
            super();

            const properties = this._getInitProperties();


            if (properties)
            {}

            if (typeof firebase === 'undefined')
            {
                return;
            }
            
            this.data = {};

            this.errorMsg = "";

            this.eventResponse = "";

            this.CallBack = globalThis.C3.Plugins.EMI_INDO_CloudFirestore.Cnds;

        }

        _release()
        {
            super._release();
        }

        _saveToJson()
        {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o)
        {
            // load state for savegames
        }

    };
}