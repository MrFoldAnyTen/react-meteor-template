Meteor.startup(() => {

    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            email: "dylan@dylan.com",
            password: "dylans"
        });
    }

});
