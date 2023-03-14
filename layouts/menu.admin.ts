interface MenuItem {
    key: string;
    title: string;
    icon?: string;
    link?: string;
    children?: MenuItem[];
}

const ADMIN_MENU: MenuItem[] = [
    {
        key: '1', title: 'Dashboard',
        icon: 'fas fa-tachometer-alt',
        link: '/admin',
    },
    {
        key: '2', title: 'Categories',
        link: '/admin/categories',
        icon: 'fas fa-boxes'
    },
    {
        key: '3', title: 'Products',
        link: '/admin/products',
        icon: 'fas fa-box'
    },
    {
        key: '4', title: 'Orders',
        link: '/admin/orders',
        icon: 'fas fa-coins',
    },
    {
        key: '5', title: 'Homepage',
        link: '/admin/cms/homepage',
        icon: 'fas fa-laptop-house'
    },
    {
        key: '6', title: 'Landing pages',
        link: '/admin/cms/landing-pages',
        icon: 'fas fa-pager'
    },
    {
        key: '7', title: 'Media',
        link: '/admin/cms/media',
        icon: 'fas fa-photo-video'
    },
    {
        key: '8', title: 'Articles',
        link: '/admin/cms/articles',
        icon: 'fas fa-newspaper'
    },
    {
        key: '9', title: 'Seeding',
        link: '/admin/cms/seeding',
        icon: 'fas fa-seedling'
    },
    {
        key: '10', title: 'Accounts',
        link: '/admin/accounts',
        icon: 'fas fa-users'
    },
    {
        key: '11', title: 'Settings',
        icon: 'fas fa-cogs',
        children: [
            {
                key: '12', title: 'Footer',
                link: '/admin/settings/footer',
            },
            {
                key: '13', title: 'Contacts',
                link: '/admin/settings/contacts',
            },
        ],
    },
];

export {
    MenuItem,
    ADMIN_MENU,
}