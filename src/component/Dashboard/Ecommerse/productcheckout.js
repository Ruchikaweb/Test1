import React from 'react' ;


const Productcheckout = ()=>{
    return(
        <React.Fragment>
             <div className="dashboard-main-wrapper">
        {/* <!-- ============================================================== -->
        <!-- navbar -->
        <!-- ============================================================== --> */}
        <div className="dashboard-header">
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <a className="navbar-brand" href="index.html">Concept</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto navbar-right-top">
                        <li className="nav-item">
                            <div id="custom-search" className="top-search-bar">
                                <input className="form-control" type="text" placeholder="Search.."/>
                            </div>
                        </li>
                        <li className="nav-item dropdown notification">
                            <a className="nav-link nav-icons" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-fw fa-bell"></i> <span className="indicator"></span></a>
                            <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
                                <li>
                                    <div className="notification-title"> Notification</div>
                                    <div className="notification-list">
                                        <div className="list-group">
                                            <a href="#" className="list-group-item list-group-item-action active">
                                                <div className="notification-info">
                                                    <div className="notification-list-user-img"><img src="assets/images/avatar-2.jpg" alt="" className="user-avatar-md rounded-circle"/></div>
                                                    <div className="notification-list-user-block"><span className="notification-list-user-name">Jeremy Rakestraw</span>accepted your invitation to join the team.
                                                        <div className="notification-date">2 min ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action">
                                                <div className="notification-info">
                                                    <div className="notification-list-user-img"><img src="assets/images/avatar-3.jpg" alt="" className="user-avatar-md rounded-circle"/></div>
                                                    <div className="notification-list-user-block"><span className="notification-list-user-name">John Abraham </span>is now following you
                                                        <div className="notification-date">2 days ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action">
                                                <div className="notification-info">
                                                    <div className="notification-list-user-img"><img src="assets/images/avatar-4.jpg" alt="" className="user-avatar-md rounded-circle"/></div>
                                                    <div className="notification-list-user-block"><span className="notification-list-user-name">Monaan Pechi</span> is watching your main repository
                                                        <div className="notification-date">2 min ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action">
                                                <div className="notification-info">
                                                    <div className="notification-list-user-img"><img src="assets/images/avatar-5.jpg" alt="" className="user-avatar-md rounded-circle"/></div>
                                                    <div className="notification-list-user-block"><span className="notification-list-user-name">Jessica Caruso</span>accepted your invitation to join the team.
                                                        <div className="notification-date">2 min ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list-footer"> <a href="#">View all notifications</a></div>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown connection">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fas fa-fw fa-th"></i> </a>
                            <ul className="dropdown-menu dropdown-menu-right connection-dropdown">
                                <li className="connection-list">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                            <a href="#" className="connection-item"><img src="assets/images/github.png" alt="" /> <span>Github</span></a>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                            <a href="#" className="connection-item"><img src="assets/images/dribbble.png" alt="" /> <span>Dribbble</span></a>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                            <a href="#" className="connection-item"><img src="assets/images/dropbox.png" alt="" /> <span>Dropbox</span></a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                            <a href="#" className="connection-item"><img src="assets/images/bitbucket.png" alt=""/> <span>Bitbucket</span></a>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                            <a href="#" className="connection-item"><img src="assets/images/mail_chimp.png" alt="" /><span>Mail chimp</span></a>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                            <a href="#" className="connection-item"><img src="assets/images/slack.png" alt="" /> <span>Slack</span></a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="conntection-footer"><a href="#">More</a></div>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown nav-user">
                            <a className="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/images/avatar-1.jpg" alt="" className="user-avatar-md rounded-circle"/></a>
                            <div className="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
                                <div className="nav-user-info">
                                    <h5 className="mb-0 text-white nav-user-name">John Abraham </h5>
                                    <span className="status"></span><span className="ml-2">Available</span>
                                </div>
                                <a className="dropdown-item" href="#"><i className="fas fa-user mr-2"></i>Account</a>
                                <a className="dropdown-item" href="#"><i className="fas fa-cog mr-2"></i>Setting</a>
                                <a className="dropdown-item" href="#"><i className="fas fa-power-off mr-2"></i>Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        {/* <!-- ============================================================== -->
        <!-- end navbar -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- left sidebar -->
        <!-- ============================================================== --> */}
        <div className="nav-left-sidebar sidebar-dark">
            <div className="menu-list">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="d-xl-none d-lg-none" href="#">Dashboard</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav flex-column">
                            <li className="nav-divider">
                                Menu
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link active" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i className="fa fa-fw fa-user-circle"></i>Dashboard <span className="badge badge-success">6</span></a>
                                <div id="submenu-1" className="collapse submenu" style={{}}>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1-2" aria-controls="submenu-1-2">E-Commerce</a>
                                            <div id="submenu-1-2" className="collapse submenu" style={{}}>
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="index.html">E Commerce Dashboard</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="ecommerce-product.html">Product List</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="ecommerce-product-single.html">Product Single</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="ecommerce-product-checkout.html">Product Checkout</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="dashboard-finance.html">Finance</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="dashboard-sales.html">Sales</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1-1" aria-controls="submenu-1-1">Infulencer</a>
                                            <div id="submenu-1-1" className="collapse submenu" style={{}}>
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="dashboard-influencer.html">Influencer</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="influencer-finder.html">Influencer Finder</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="influencer-profile.html">Influencer Profile</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2"><i className="fa fa-fw fa-rocket"></i>UI Elements</a>
                                <div id="submenu-2" className="collapse submenu" style={{}}>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/cards.html">Cards <span className="badge badge-secondary">New</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/general.html">General</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/carousel.html">Carousel</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/listgroup.html">List Group</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/typography.html">Typography</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/accordions.html">Accordions</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/tabs.html">Tabs</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-3" aria-controls="submenu-3"><i className="fas fa-fw fa-chart-pie"></i>Chart</a>
                                <div id="submenu-3" className="collapse submenu" style={{}}>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/chart-c3.html">C3 Charts</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/chart-chartist.html">Chartist Charts</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/chart-charts.html">Chart</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/chart-morris.html">Morris</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/chart-sparkline.html">Sparkline</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/chart-gauge.html">Guage</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-4" aria-controls="submenu-4"><i className="fab fa-fw fa-wpforms"></i>Forms</a>
                                <div id="submenu-4" className="collapse submenu" style={{}}>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/form-elements.html">Form Elements</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/form-validation.html">Parsely Validations</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/multiselect.html">Multiselect</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/datepicker.html">Date Picker</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/bootstrap-select.html">Bootstrap Select</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-5" aria-controls="submenu-5"><i className="fas fa-fw fa-table"></i>Tables</a>
                                <div id="submenu-5" className="collapse submenu" style={{}}>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/general-table.html">General Tables</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/data-tables.html">Data Tables</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-divider">
                                Features
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-6" aria-controls="submenu-6"><i className="fas fa-fw fa-file"></i> Pages </a>
                                <div id="submenu-6" className="collapse submenu" style={{}}>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/blank-page.html">Blank Page</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/blank-page-header.html">Blank Page Header</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/login.html">Login</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/404-page.html">404 page</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/sign-up.html">Sign up Page</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/forgot-password.html">Forgot Password</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/pricing.html">Pricing Tables</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/timeline.html">Timeline</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/calendar.html">Calendar</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/sortable-nestable-lists.html">Sortable/Nestable List</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/widgets.html">Widgets</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/media-object.html">Media Objects</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/cropper-image.html">Cropper</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/color-picker.html">Color Picker</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-7" aria-controls="submenu-7"><i className="fas fa-fw fa-inbox"></i>Apps <span className="badge badge-secondary">New</span></a>
                                <div id="submenu-7" className="collapse submenu" style={{}}>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/inbox.html">Inbox</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/email-details.html">Email Detail</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/email-compose.html">Email Compose</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/message-chat.html">Message Chat</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-8" aria-controls="submenu-8"><i className="fas fa-fw fa-columns"></i>Icons</a>
                                <div id="submenu-8" className="collapse submenu" style={{}}>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/icon-fontawesome.html">FontAwesome Icons</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/icon-material.html">Material Icons</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/icon-simple-lineicon.html">Simpleline Icon</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/icon-themify.html">Themify Icon</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/icon-flag.html">Flag Icons</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/icon-weather.html">Weather Icon</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-9" aria-controls="submenu-9"><i className="fas fa-fw fa-map-marker-alt"></i>Maps</a>
                                <div id="submenu-9" className="collapse submenu" style={{}}>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/map-google.html">Google Maps</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="pages/map-vector.html">Vector Maps</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-10" aria-controls="submenu-10"><i className="fas fa-f fa-folder"></i>Menu Level</a>
                                <div id="submenu-10" className="collapse submenu" style={{}}>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Level 1</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-11" aria-controls="submenu-11">Level 2</a>
                                            <div id="submenu-11" className="collapse submenu" style={{}}>
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Level 1</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Level 2</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Level 3</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- ============================================================== -->
        <!-- end left sidebar -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- wrapper  -->
        <!-- ============================================================== --> */}
        <div className="dashboard-wrapper">
            <div className="dashboard-ecommerce">
                <div className="container-fluid dashboard-content ">
                    {/* <!-- ============================================================== -->
                    <!-- pageheader  -->
                    <!-- ============================================================== --> */}
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="page-header">
                                <h2 className="pageheader-title">E-commerce Product Checkout </h2>
                                <p className="pageheader-text">Nulla euismod urna eros, sit amet scelerisque torton lectus vel mauris facilisis faucibus at enim quis massa lobortis rutrum.</p>
                                <div className="page-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">E-coommerce</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">E-Commerce Product Checkout</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ============================================================== -->
                    <!-- end pageheader  -->
                    <!-- ============================================================== --> */}
                    <div className="row">
                        <div className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="mb-0">Billing address</h4>
                                        </div>
                                        <div className="card-body">
                                            <form className="needs-validation" novalidate="">
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label for="firstName">First name</label>
                                                        <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
                                                        <div className="invalid-feedback">
                                                            Valid first name is required.
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label for="lastName">Last name</label>
                                                        <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
                                                        <div className="invalid-feedback">
                                                            Valid last name is required.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="username">Username</label>
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">@</span>
                                                        </div>
                                                        <input type="text" className="form-control" id="username" placeholder="Username" required=""/>
                                                        <div className="invalid-feedback" style={{width:'100%'}}>
                                                            Your username is required.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="email">Email <span className="text-muted">(Optional)</span></label>
                                                    <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                                                    <div className="invalid-feedback">
                                                        Please enter a valid email address for shipping updates.
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="address">Address</label>
                                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
                                                    <div className="invalid-feedback">
                                                        Please enter your shipping address.
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                                                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-5 mb-3">
                                                        <label for="country">Country</label>
                                                        <select className="custom-select d-block w-100" id="country" required="">
                                                            <option value="">Choose...</option>
                                                            <option>United States</option>
                                                        </select>
                                                        <div className="invalid-feedback">
                                                            Please select a valid country.
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <label for="state">State</label>
                                                        <select className="custom-select d-block w-100" id="state" required="">
                                                            <option value="">Choose...</option>
                                                            <option>California</option>
                                                        </select>
                                                        <div className="invalid-feedback">
                                                            Please provide a valid state.
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 mb-3">
                                                        <label for="zip">Zip</label>
                                                        <input type="text" className="form-control" id="zip" placeholder="" required=""/>
                                                        <div className="invalid-feedback">
                                                            Zip code required.
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="mb-4"/>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="same-address"/>
                                                    <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="save-info"/>
                                                    <label className="custom-control-label" for="save-info">Save this information for next time</label>
                                                </div>
                                                <hr className="mb-4"/>
                                                <h4 className="mb-3">Payment</h4>
                                                <div className="d-block my-3">
                                                    <div className="custom-control custom-radio">
                                                        <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked="" required=""/>
                                                        <label className="custom-control-label" for="credit">Credit card</label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required=""/>
                                                        <label className="custom-control-label" for="debit">Debit card</label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required=""/>
                                                        <label className="custom-control-label" for="paypal">PayPal</label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label for="cc-name">Name on card</label>
                                                        <input type="text" className="form-control" id="cc-name" placeholder="" required=""/>
                                                        <small className="text-muted">Full name as displayed on card</small>
                                                        <div className="invalid-feedback">
                                                            Name on card is required
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label for="cc-number">Credit card number</label>
                                                        <input type="text" className="form-control" id="cc-number" placeholder="" required=""/>
                                                        <div className="invalid-feedback">
                                                            Credit card number is required
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 mb-3">
                                                        <label for="cc-expiration">Expiration</label>
                                                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""/>
                                                        <div className="invalid-feedback">
                                                            Expiration date required
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 mb-3">
                                                        <label for="cc-cvv">CVV</label>
                                                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required=""/>
                                                        <div className="invalid-feedback">
                                                            Security code required
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="mb-4"/>
                                                <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                                            </form>
                                        </div>
                                    </div> 
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="d-flex justify-content-between align-items-center mb-0">
                                                        <span className="text-muted">Your cart</span>
                                          <span className="badge badge-secondary badge-pill">3</span>
                                                 </h4>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-group mb-3">
                                                <li className="list-group-item d-flex justify-content-between">
                                                    <div>
                                                        <h6 className="my-0">Product name</h6>
                                                        <small className="text-muted">Brief description</small>
                                                    </div>
                                                    <span className="text-muted">$12</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between">
                                                    <div>
                                                        <h6 className="my-0">Second product</h6>
                                                        <small className="text-muted">Brief description</small>
                                                    </div>
                                                    <span className="text-muted">$8</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between">
                                                    <div>
                                                        <h6 className="my-0">Third item</h6>
                                                        <small className="text-muted">Brief description</small>
                                                    </div>
                                                    <span className="text-muted">$5</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between bg-light">
                                                    <div className="text-success">
                                                        <h6 className="my-0">Promo code</h6>
                                                        <small>EXAMPLECODE</small>
                                                    </div>
                                                    <span className="text-success">-$5</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between">
                                                    <span>Total (USD)</span>
                                                    <strong>$20</strong>
                                                </li>
                                            </ul>
                                            <form>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder=""/>
                                                    <div className="input-group-append">
                                                        <button type="submit" className="btn btn-secondary">Redeem</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ============================================================== -->
                <!-- footer -->
                <!-- ============================================================== --> */}
                <div className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                Copyright © 2018 Concept. All rights reserved. Dashboard by <a href="https://colorlib.com/wp/">Colorlib</a>.
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="text-md-right footer-links d-none d-sm-block">
                                    <a href="javascript: void(0);">About</a>
                                    <a href="javascript: void(0);">Support</a>
                                    <a href="javascript: void(0);">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ============================================================== -->
                <!-- end footer -->
                <!-- ============================================================== --> */}
            </div>
            {/* <!-- ============================================================== -->
            <!-- end wrapper  -->
            <!-- ============================================================== --> */}
        </div>
    </div>
   
        </React.Fragment>
    )
}

export default  Productcheckout ;