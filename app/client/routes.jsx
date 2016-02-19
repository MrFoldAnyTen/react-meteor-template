FlowRouter.route("/", {
    name: 'Home',
    subscriptions(params) {

    },
    action(params) {
        renderMainLayoutWith(<C.Home />);
    }
});

FlowRouter.route("/login", {
    name: "Login",
    subscriptions(params) {

    },
    action(params) {
        renderMainLayoutWith(<C.UserLogin />);
    }
});

FlowRouter.route("/Contact", {
    name: "Contact",
    subscriptions(params) {

    },
    action(params) {
        renderMainLayoutWith(<C.Contact />);
    }
});

FlowRouter.route("/gallery", {
    name: 'Gallery',
    subscriptions(params) {

    },
    action(params) {
        renderMainLayoutWith(<C.Gallery />);
    }
});
FlowRouter.route("/DDD", {
    name: 'DDD',
    subscriptions(params) {

    },
    action(params) {
        renderMainLayoutWith(<C.DDD />);
    }
});
function renderMainLayoutWith(component) {
    ReactLayout.render(C.MainLayout, {
        header: <C.MainHeader />,
        content: component,
        footer: <C.MainFooter />
    });
}
