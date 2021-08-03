import React from 'react'

const Infulencerfinder = ()=>{
    return(
        <React.Fragment>
             <div className="dashboard-main-wrapper">
        
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
            <div className="influence-finder">
                <div className="container-fluid dashboard-content">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="page-header">
                                <h3 className="mb-2">Influencer Finder </h3>
                                <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                                <div className="page-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Influencer Finder Template</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="row">
                       
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <form>
                                        <input className="form-control form-control-lg" type="search" placeholder="Search" aria-label="Search"/>
                                        <button className="btn btn-primary search-btn" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="user-avatar float-xl-left pr-4 float-none">
                                                <img src="assets/images/avatar-1.jpg" alt="User Avatar" className="rounded-circle user-avatar-xl"/>
                                                    </div>
                                                <div className="pl-xl-3">
                                                    <div className="m-b-0">
                                                        <div className="user-avatar-name d-inline-block">
                                                            <h2 className="font-24 m-b-10">Henry Barbara</h2>
                                                        </div>
                                                        <div className="rating-star d-inline-block pl-xl-2 mb-2 mb-xl-0">
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <p className="d-inline-block text-dark">14 Reviews </p>
                                                        </div>
                                                    </div>
                                                    <div className="user-avatar-address">
                                                        <p className="mb-2"><i className="fa fa-map-marker-alt mr-2  text-primary"></i>Salt Lake City, UT <span className="m-l-10">Male<span className="m-l-20">29 Year Old</span></span>
                                                        </p>
                                                        <div className="mt-3">
                                                            <a href="#" className="mr-1 badge badge-light">Fitness</a><a href="#" className="mr-1 badge badge-light">Life Style</a><a href="#" className="mr-1 badge badge-light">Gym</a><a href="#" className="badge badge-light">Crossfit</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="float-xl-right float-none mt-xl-0 mt-4">
                                                    <a href="#" className="btn-wishlist m-r-10"><i className="far fa-star"></i></a>
                                                    <a href="#" className="btn btn-secondary">Send Messages</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top user-social-box">
                                        <div className="user-social-media d-xl-inline-block "><span className="mr-2 twitter-color"> <i className="fab fa-twitter-square"></i></span><span>13,291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  pinterest-color"> <i className="fab fa-pinterest-square"></i></span><span>84,019</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 instagram-color"> <i className="fab fa-instagram"></i></span><span>12,300</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  facebook-color"> <i className="fab fa-facebook-square "></i></span><span>92,920</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 medium-color"> <i className="fab fa-medium"></i></span><span>291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 youtube-color"> <i className="fab fa-youtube"></i></span><span>1291</span></div>
                                    </div>
                                </div>
                                {/* <!-- ============================================================== -->
                                <!-- end card influencer one -->
                                <!-- ============================================================== --> */}


                            {/* <!-- ============================================================== -->
                            <!-- card influencer one -->
                            <!-- ============================================================== --> */}
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="user-avatar float-xl-left pr-4 float-none">
                                                <img src="assets/images/avatar-2.jpg" alt="User Avatar" className="rounded-circle user-avatar-xl"/>
                                                    </div>
                                                <div className="pl-xl-3">
                                                    <div className="m-b-0">
                                                        <div className="user-avatar-name d-inline-block">
                                                            <h2 className="font-24 m-b-10">Louis Mstara</h2>
                                                        </div>
                                                        <div className="rating-star d-inline-block pl-xl-2 mb-2 mb-xl-0">
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <p className="d-inline-block text-dark">14 Reviews </p>
                                                        </div>
                                                    </div>
                                                    <div className="user-avatar-address">
                                                        <p className="mb-2"><i className="fa fa-map-marker-alt mr-2  text-primary"></i>Avenal, CA, USA<span className="m-l-10">Female<span className="m-l-20">24 Year Old</span></span>
                                                        </p>
                                                        <div className="mt-3">
                                                            <a href="#" className="mr-1 badge badge-light">Fitness</a><a href="#" className="mr-1 badge badge-light">Life Style</a><a href="#" className="mr-1 badge badge-light">Gym</a><a href="#" className="badge badge-light">Crossfit</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="float-xl-right float-none mt-xl-0 mt-4">
                                                    <a href="#" className="btn-wishlist m-r-10"><i className="far fa-star"></i></a>
                                                    <a href="#" className="btn btn-secondary">Send Messages</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top user-social-box">
                                        <div className="user-social-media d-xl-inline-block "><span className="mr-2 twitter-color"> <i className="fab fa-twitter-square"></i></span><span>13,291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  pinterest-color"> <i className="fab fa-pinterest-square"></i></span><span>84,019</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 instagram-color"> <i className="fab fa-instagram"></i></span><span>12,300</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  facebook-color"> <i className="fab fa-facebook-square "></i></span><span>92,920</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 medium-color"> <i className="fab fa-medium"></i></span><span>291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 youtube-color"> <i className="fab fa-youtube"></i></span><span>1291</span></div>
                                    </div>
                                </div>
                                {/* <!-- ============================================================== -->
                                <!-- end card influencer one -->
                                <!-- ============================================================== -->
                                <!-- ============================================================== -->
                            <!-- card influencer one -->
                            <!-- ============================================================== --> */}
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="user-avatar float-xl-left pr-4 float-none">
                                                <img src="assets/images/avatar-3.jpg" alt="User Avatar" className="rounded-circle user-avatar-xl"/>
                                                    </div>
                                                <div className="pl-xl-3">
                                                    <div className="m-b-0">
                                                        <div className="user-avatar-name d-inline-block">
                                                            <h2 className="font-24 m-b-10">Nichole Oliver</h2>
                                                        </div>
                                                        <div className="rating-star d-inline-block pl-xl-2 mb-2 mb-xl-0">
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <p className="d-inline-block text-dark">14 Reviews </p>
                                                        </div>
                                                    </div>
                                                    <div className="user-avatar-address">
                                                        <p className="mb-2"><i className="fa fa-map-marker-alt mr-2  text-primary"></i>98 Richland Avenue, USA<span className="m-l-10">Male<span className="m-l-20">34 Year Old</span></span>
                                                        </p>
                                                        <div className="mt-3">
                                                            <a href="#" className="mr-1 badge badge-light">Fitness</a><a href="#" className="mr-1 badge badge-light">Life Style</a><a href="#" className="mr-1 badge badge-light">Gym</a><a href="#" className="badge badge-light">Crossfit</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="float-xl-right float-none mt-xl-0 mt-4">
                                                    <a href="#" className="btn-wishlist m-r-10"><i className="far fa-star"></i></a>
                                                    <a href="#" className="btn btn-secondary">Send Messages</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top user-social-box">
                                        <div className="user-social-media d-xl-inline-block "><span className="mr-2 twitter-color"> <i className="fab fa-twitter-square"></i></span><span>13,291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  pinterest-color"> <i className="fab fa-pinterest-square"></i></span><span>84,019</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 instagram-color"> <i className="fab fa-instagram"></i></span><span>12,300</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  facebook-color"> <i className="fab fa-facebook-square "></i></span><span>92,920</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 medium-color"> <i className="fab fa-medium"></i></span><span>291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 youtube-color"> <i className="fab fa-youtube"></i></span><span>1291</span></div>
                                    </div>
                                </div>
                               
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="user-avatar float-xl-left pr-4 float-none">
                                                <img src="assets/images/avatar-4.jpg" alt="User Avatar" className="rounded-circle user-avatar-xl"/>
                                                    </div>
                                                <div className="pl-xl-3">
                                                    <div className="m-b-0">
                                                        <div className="user-avatar-name d-inline-block">
                                                            <h2 className="font-24 m-b-10">Pallavi Johnson</h2>
                                                        </div>
                                                        <div className="rating-star d-inline-block pl-xl-2 mb-2 mb-xl-0">
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <p className="d-inline-block text-dark">14 Reviews </p>
                                                        </div>
                                                    </div>
                                                    <div className="user-avatar-address">
                                                        <p className="mb-2"><i className="fa fa-map-marker-alt mr-2  text-primary"></i>4427 Wines Lane, USA <span className="m-l-10">Female<span className="m-l-20">29 Year Old</span></span>
                                                        </p>
                                                        <div className="mt-3">
                                                            <a href="#" className="mr-1 badge badge-light">Fitness</a><a href="#" className="mr-1 badge badge-light">Life Style</a><a href="#" className="mr-1 badge badge-light">Gym</a><a href="#" className="badge badge-light">Crossfit</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="float-xl-right float-none mt-xl-0 mt-4">
                                                    <a href="#" className="btn-wishlist m-r-10"><i className="far fa-star"></i></a>
                                                    <a href="#" className="btn btn-secondary">Send Messages</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top user-social-box">
                                        <div className="user-social-media d-xl-inline-block "><span className="mr-2 twitter-color"> <i className="fab fa-twitter-square"></i></span><span>13,291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  pinterest-color"> <i className="fab fa-pinterest-square"></i></span><span>84,019</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 instagram-color"> <i className="fab fa-instagram"></i></span><span>12,300</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  facebook-color"> <i className="fab fa-facebook-square "></i></span><span>92,920</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 medium-color"> <i className="fab fa-medium"></i></span><span>291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 youtube-color"> <i className="fab fa-youtube"></i></span><span>1291</span></div>
                                    </div>
                            </div>
                             <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="user-avatar float-xl-left pr-4 float-none">
                                                <img src="assets/images/avatar-5.jpg" alt="User Avatar" className="rounded-circle user-avatar-xl"/>
                                                    </div>
                                                <div className="pl-xl-3">
                                                    <div className="m-b-0">
                                                        <div className="user-avatar-name d-inline-block">
                                                            <h2 className="font-24 m-b-10">Komal Johnson</h2>
                                                        </div>
                                                        <div className="rating-star d-inline-block pl-xl-2 mb-2 mb-xl-0">
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <i className="fa fa-fw fa-star"></i>
                                                            <p className="d-inline-block text-dark">14 Reviews </p>
                                                        </div>
                                                    </div>
                                                    <div className="user-avatar-address">
                                                        <p className="mb-2"><i className="fa fa-map-marker-alt mr-2  text-primary"></i>4427 Wines Lane, USA <span className="m-l-10">Female<span className="m-l-20">29 Year Old</span></span>
                                                        </p>
                                                        <div className="mt-3">
                                                            <a href="#" className="mr-1 badge badge-light">Fitness</a><a href="#" className="mr-1 badge badge-light">Life Style</a><a href="#" className="mr-1 badge badge-light">Gym</a><a href="#" className="badge badge-light">Crossfit</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="float-xl-right float-none mt-xl-0 mt-4">
                                                    <a href="#" className="btn-wishlist m-r-10"><i className="far fa-star"></i></a>
                                                    <a href="#" className="btn btn-secondary">Send Messages</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top user-social-box">
                                        <div className="user-social-media d-xl-inline-block "><span className="mr-2 twitter-color"> <i className="fab fa-twitter-square"></i></span><span>13,291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  pinterest-color"> <i className="fab fa-pinterest-square"></i></span><span>84,019</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 instagram-color"> <i className="fab fa-instagram"></i></span><span>12,300</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2  facebook-color"> <i className="fab fa-facebook-square "></i></span><span>92,920</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 medium-color"> <i className="fab fa-medium"></i></span><span>291</span></div>
                                        <div className="user-social-media d-xl-inline-block"><span className="mr-2 youtube-color"> <i className="fab fa-youtube"></i></span><span>1291</span></div>
                                    </div>
                            </div>
                              
                            </div>
                           
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="font-16">Sorting By</h3>
                                        <select className="form-control">
                                            <option>Followers</option>
                                            <option>Followers</option>
                                        </select>
                                    </div>
                                    <div className="card-body border-top">
                                        <h3 className="font-16">Influncer by Rating</h3>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
                                            <label className="custom-control-label" for="customRadio1"><i className="fas fa-star rating-color fa-xs"></i></label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                                            <label className="custom-control-label" for="customRadio2"><i className="fas fa-star rating-color fa-xs"></i><i className="fas fa-star rating-color fa-xs"></i></label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input"/>
                                            <label className="custom-control-label" for="customRadio3"><i className="fas fa-star rating-color fa-xs"></i><i className="fas fa-star rating-color fa-xs"></i><i className="fas fa-star rating-color fa-xs"></i></label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="customRadio4" name="customRadio" className="custom-control-input"/>
                                            <label className="custom-control-label" for="customRadio4"><i className="fas fa-star rating-color fa-xs"></i><i className="fas fa-star rating-color fa-xs"></i><i className="fas fa-star rating-color fa-xs"></i><i className="fas fa-star rating-color fa-xs"></i></label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="customRadio5" name="customRadio" className="custom-control-input"/>
                                            <label className="custom-control-label" for="customRadio5"><i className="fas fa-star rating-color fa-xs"></i><i className="fas fa-star rating-color fa-xs fa-xs"></i><i className="fas fa-star rating-color fa-xs fa-xs"></i><i className="fas fa-star rating-color fa-xs fa-xs"></i><i className="fas fa-star rating-color fa-xs fa-xs"></i></label>
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <h3 className="font-16">Social Media Platform</h3>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck10"/>
                                            <label className="custom-control-label" for="customCheck10">Facebook</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck11"/>
                                            <label className="custom-control-label" for="customCheck11">Instagram</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck12"/>
                                            <label className="custom-control-label" for="customCheck12">Pinterest</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck13"/>
                                            <label className="custom-control-label" for="customCheck13">Twitter</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck14"/>
                                            <label className="custom-control-label" for="customCheck14">Youtube</label>
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <h3 className="font-16">Influncer Category</h3>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck15"/>
                                            <label className="custom-control-label" for="customCheck15">Business</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck16"/>
                                            <label className="custom-control-label" for="customCheck16">Lifestyle</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck17"/>
                                            <label className="custom-control-label" for="customCheck17">Fitness</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck18"/>
                                            <label className="custom-control-label" for="customCheck18">Sports</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck19"/>
                                            <label className="custom-control-label" for="customCheck19">Clothing</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck20"/>
                                            <label className="custom-control-label" for="customCheck20">Pets & Animals</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck21"/>
                                            <label className="custom-control-label" for="customCheck21">Beauty & Makeup</label>
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <h3 className="font-16">Age Demographics</h3>
                                        <select className="form-control">
                                            <option selected>Select the Age</option>
                                            <option value="20-30">20-30</option>
                                            <option value="30-40">30-40</option>
                                            <option value="40-50">40-50</option>
                                        </select>
                                    </div>
                                    <div className="card-body border-top">
                                        <a href="#" className="btn btn-secondary btn-lg btn-block">Submit</a>
                                    </div>
                                </div>
                            </div>
                          
                    </div>
                    
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
                   
                </div>
                
            </div>
         </div> 
         </div>   
        </React.Fragment>
    )
}

export default Infulencerfinder ;