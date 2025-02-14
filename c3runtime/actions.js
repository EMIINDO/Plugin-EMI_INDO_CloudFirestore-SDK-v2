"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_CloudFirestore.Acts = {
        async AddData(path, id, json)
        {
            if (typeof firebase == 'undefined')
            {
                return;
            }
            

            const db = await firebase.firestore();

            const self = this;

            var obj = {};

            obj = JSON.parse(json);

            db.collection(path).doc(id).set(obj)
                .then(() => {

                self.eventResponse = ("Document successfully written!");
                self._trigger(self.CallBack.OnAddData);
            })
                .
            catch ((error) => {

                self.errorMsg = ("Error writing document: ", error);
                self._trigger(self.CallBack.OnError);
            });

        },

        async ReadData(path, id)
        {
            if (typeof firebase == 'undefined')
            {
                return;
            }
           

            const self = this;

            const db = firebase.firestore();

            var docRef = await db.collection(path).doc(id);

            docRef.get().then((doc) => {
                if (doc.exists)
                {
                    self.eventResponse = ("Document successfully read!");
                    self.data = (doc.data());
                    self._trigger(self.CallBack.OnReadData);
                }
                else
                {
                    self.errorMsg = ("No such document!");
                    self._trigger(self.CallBack.OnError);
                }
            }).
            catch ((error) => {
                self.errorMsg = ("Error getting document:", error);
                self._trigger(self.CallBack.OnError);
            });


        },

        async UpdateData(path, id, json)
        {
            if (typeof firebase == 'undefined')
            {
                return;
            }
            

            const db = firebase.firestore();

            const self = this;

            var obj = {};

            obj = JSON.parse(json);

            var washingtonRef = db.collection(path).doc(id);

            return washingtonRef.update(obj)
                .then(() => {
                self.eventResponse = ("Document successfully updated!");
                self._trigger(self.CallBack.OnUpdateData);
            })
                .
            catch ((error) => {
                self.errorMsg = ("Error updating document: ", error);
                self._trigger(self.CallBack.OnError);
            });

        },

        async DeleteData(path, id)
        {
            if (typeof firebase == 'undefined')
            {
                return;
            }
            

            const self = this;

            const db = firebase.firestore();

            db.collection(path).doc(id).delete().then(() => {
                self.eventResponse = ("Document successfully deleted!");
                self._trigger(self.CallBack.OnDeleteData);
            }).
            catch ((error) => {
                self.errorMsg = ("Error removing document: ", error);
                self._trigger(self.CallBack.OnError);
            });
        }
    };
}