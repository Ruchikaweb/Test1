import React from 'react'

const Infulen = ()=>{
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
	    <div className="dashboard-wrapper">
	        <div className="dashboard-influence">
	                <div className="row">
	                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
	                        <div className="page-header">
	                            <h3 className="mb-2">Infulencer Dashboard Template </h3>
	                            <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
	                            <div className="page-breadcrumb">
	                                <nav aria-label="breadcrumb">
	                                    <ol className="breadcrumb">
	                                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
	                                        <li className="breadcrumb-item active" aria-current="page">Influencer Dashboard Template</li>
	                                    </ol>
	                                </nav>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            
	                <div className="row">
	                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
	                        <div className="card influencer-profile-data">
	                            <div className="card-body">
	                                <div className="row">
	                                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12">
	                                        <div className="text-center">
	                                            <img src="assets/images/avatar-1.jpg" alt="User Avatar" className="rounded-circle user-avatar-xxl"/>
	                                            </div>
	                                        </div>
	                                        <div className="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-12">
	                                            <div className="user-avatar-info">
	                                                <div className="m-b-20">
	                                                    <div className="user-avatar-name">
	                                                        <h2 className="mb-1">Henry Barbara</h2>
	                                                    </div>
	                                                    <div className="rating-star  d-inline-block">
	                                                        <i className="fa fa-fw fa-star"></i>
	                                                        <i className="fa fa-fw fa-star"></i>
	                                                        <i className="fa fa-fw fa-star"></i>
	                                                        <i className="fa fa-fw fa-star"></i>
	                                                        <i className="fa fa-fw fa-star"></i>
	                                                        <p className="d-inline-block text-dark">14 Reviews </p>
	                                                    </div>
	                                                </div>
	                                             <div className="float-right"><a href="#" className="user-avatar-email text-secondary">www.henrybarbara.com</a></div> -->
	                                                <div className="user-avatar-address">
	                                                    <p className="border-bottom pb-3">
	                                                        <span className="d-xl-inline-block d-block mb-2"><i className="fa fa-map-marker-alt mr-2 text-primary "></i>4045 Denver AvenueLos Angeles, CA 90017</span>
	                                                        <span className="mb-2 ml-xl-4 d-xl-inline-block d-block">Joined date: 23 June, 2018  </span>
	                                                        <span className=" mb-2 d-xl-inline-block d-block ml-xl-4">Male 
	                                                                </span>
	                                                        <span className=" mb-2 d-xl-inline-block d-block ml-xl-4">29 Year Old </span>
	                                                    </p>
	                                                    <div className="mt-3">
	                                                        <a href="#" className="badge badge-light mr-1">Fitness</a> <a href="#" className="badge badge-light mr-1">Life Style</a> <a href="#" className="badge badge-light">Gym</a>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>
	                                <div className="border-top user-social-box">
	                                    <div className="user-social-media d-xl-inline-block"><span className="mr-2 twitter-color"> <i className="fab fa-twitter-square"></i></span><span>13,291</span></div>
	                                    <div className="user-social-media d-xl-inline-block"><span className="mr-2  pinterest-color"> <i className="fab fa-pinterest-square"></i></span><span>84,019</span></div>
	                                    <div className="user-social-media d-xl-inline-block"><span className="mr-2 instagram-color"> <i className="fab fa-instagram"></i></span><span>12,300</span></div>
	                                    <div className="user-social-media d-xl-inline-block"><span className="mr-2  facebook-color"> <i className="fab fa-facebook-square "></i></span><span>92,920</span></div>
	                                    <div className="user-social-media d-xl-inline-block "><span className="mr-2 medium-color"> <i className="fab fa-medium"></i></span><span>291</span></div>
	                                    <div className="user-social-media d-xl-inline-block"><span className="mr-2 youtube-color"> <i className="fab fa-youtube"></i></span><span>1291</span></div>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                   
	                    <div className="row">
	                        {/* <!-- ============================================================== -->
	                        <!-- four widgets   -->
	                        <!-- ============================================================== -->
	                        <!-- ============================================================== -->
	                        <!-- total views   -->
	                        <!-- ============================================================== --> */}
	                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
	                            <div className="card">
	                                <div className="card-body">
	                                    <div className="d-inline-block">
	                                        <h5 className="text-muted">Total Views</h5>
	                                        <h2 className="mb-0"> 10,28,056</h2>
	                                    </div>
	                                    <div className="float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1">
	                                        <i className="fa fa-eye fa-fw fa-sm text-info"></i>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                        {/* <!-- ============================================================== -->
	                        <!-- end total views   -->
	                        <!-- ============================================================== -->
	                        <!-- ============================================================== -->
	                        <!-- total followers   -->
	                        <!-- ============================================================== --> */}
	                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
	                            <div className="card">
	                                <div className="card-body">
	                                    <div className="d-inline-block">
	                                        <h5 className="text-muted">Total Followers</h5>
	                                        <h2 className="mb-0"> 24,763</h2>
	                                    </div>
	                                    <div className="float-right icon-circle-medium  icon-box-lg  bg-primary-light mt-1">
	                                        <i className="fa fa-user fa-fw fa-sm text-primary"></i>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                        {/* <!-- ============================================================== -->
	                        <!-- end total followers   -->
	                        <!-- ============================================================== -->
	                        <!-- ============================================================== -->
	                        <!-- partnerships   -->
	                        <!-- ============================================================== --> */}
	                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
	                            <div className="card">
	                                <div className="card-body">
	                                    <div className="d-inline-block">
	                                        <h5 className="text-muted">Partnerships</h5>
	                                        <h2 className="mb-0">14</h2>
	                                    </div>
	                                    <div className="float-right icon-circle-medium  icon-box-lg  bg-secondary-light mt-1">
	                                        <i className="fa fa-handshake fa-fw fa-sm text-secondary"></i>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                        {/* <!-- ============================================================== -->
	                        <!-- end partnerships   -->
	                        <!-- ============================================================== -->
	                        <!-- ============================================================== -->
	                        <!-- total earned   -->
	                        <!-- ============================================================== --> */}
	                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
	                            <div className="card">
	                                <div className="card-body">
	                                    <div className="d-inline-block">
	                                        <h5 className="text-muted">Total Earned</h5>
	                                        <h2 className="mb-0"> $149.00</h2>
	                                    </div>
	                                    <div className="float-right icon-circle-medium  icon-box-lg  bg-brand-light mt-1">
	                                        <i className="fa fa-money-bill-alt fa-fw fa-sm text-brand"></i>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                        {/* <!-- ============================================================== -->
	                        <!-- end total earned   -->
	                        <!-- ============================================================== --> */}
	                    </div>
	                  
	                    <div className="row">
	                        {/* <!-- ============================================================== -->
	                        <!-- followers by gender   -->
	                        <!-- ============================================================== --> */}
	                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
	                            <div className="card">
	                                <h5 className="card-header">Followers by Gender</h5>
	                                <div className="card-body">
	                                    <div id="gender_donut" style={{height:'230px'}}></div>
	                                </div>
	                                <div className="card-footer p-0 bg-white d-flex">
	                                    <div className="card-footer-item card-footer-item-bordered w-50">
	                                        <h2 className="mb-0"> 60% </h2>
	                                        <p>Female </p>
	                                    </div>
	                                    <div className="card-footer-item card-footer-item-bordered">
	                                        <h2 className="mb-0">40% </h2>
	                                        <p>Male </p>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                        {/* <!-- ============================================================== -->
	                        <!-- end followers by gender  -->
	                        <!-- ============================================================== -->
	                        <!-- ============================================================== -->
	                        <!-- followers by age   -->
	                        <!-- ============================================================== --> */}
	                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
	                            <div className="card">
	                                <h5 className="card-header">Followers by Age</h5>
	                                <div className="card-body">
	                                    <div className="mb-3">
	                                        <div className="d-inline-block">
	                                            <h4 className="mb-0">15 - 20</h4>
	                                        </div>
	                                        <div className="progress mt-2 float-right progress-md">
	                                            <div className="progress-bar bg-secondary" role="progressbar" style={{width:'45%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
	                                        </div>
	                                    </div>
	                                    <div className="mb-3">
	                                        <div className="d-inline-block">
	                                            <h4 className="mb-0">20 - 25</h4>
	                                        </div>
	                                        <div className="progress mt-2 float-right progress-md">
	                                            <div className="progress-bar bg-secondary" role="progressbar" style={{width:'55%'}}aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
	                                        </div>
	                                    </div>
	                                    <div className="mb-3">
	                                        <div className="d-inline-block">
	                                            <h4 className="mb-0">25 - 30</h4>
	                                        </div>
	                                        <div className="progress mt-2 float-right progress-md">
	                                            <div className="progress-bar bg-secondary" role="progressbar" style={{width:'65%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
	                                        </div>
	                                    </div>
	                                    <div className="mb-3">
	                                        <div className="d-inline-block">
	                                            <h4 className="mb-0">30 - 35</h4>
	                                        </div>
	                                        <div className="progress mt-2 float-right progress-md">
	                                            <div className="progress-bar bg-secondary" role="progressbar" style={{width:'35%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
	                                        </div>
	                                    </div>
	                                    <div className="mb-3">
	                                        <div className="d-inline-block">
	                                            <h4 className="mb-0">35 - 40</h4>
	                                        </div>
	                                        <div className="progress mt-2 float-right progress-md">
	                                            <div className="progress-bar bg-secondary" role="progressbar" style={{width:'21%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
	                                        </div>
	                                    </div>
	                                    <div className="mb-3">
	                                        <div className="d-inline-block">
	                                            <h4 className="mb-0">45 - 50</h4>
	                                        </div>
	                                        <div className="progress mt-2 float-right progress-md">
	                                            <div className="progress-bar bg-secondary" role="progressbar" style={{width:'85%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
	                                        </div>
	                                    </div>
	                                    <div className="mb-3">
	                                        <div className="d-inline-block">
	                                            <h4 className="mb-0">50 - 55</h4>
	                                        </div>
	                                        <div className="progress mt-2 float-right progress-md">
	                                            <div className="progress-bar bg-secondary" role="progressbar" style={{width:'25%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                        {/* <!-- ============================================================== -->
	                        <!-- end followers by age   -->
	                        <!-- ============================================================== -->
	                        <!-- ============================================================== -->
	                        <!-- followers by locations   -->
	                        <!-- ============================================================== --> */}
	                        <div className="col-xl-5 col-lg-12 col-md-6 col-sm-12 col-12">
	                            <div className="card">
	                                <h5 className="card-header">Top Folllowes by Locations </h5>
	                                <div className="card-body">
	                                    <canvas id="chartjs_bar_horizontal"></canvas>
	                                </div>
	                            </div>
	                        </div>
	                        {/* <!-- ============================================================== -->
	                        <!-- end followers by locations  -->
	                        <!-- ============================================================== --> */}
	                    </div>
	                    <div className="row">
	                        <div className="col-lg-12">
	                            <div className="section-block">
	                                <h3 className="section-title">My Active Campaigns</h3>
	                            </div>
	                            <div className="card">
	                                <div className="campaign-table table-responsive">
	                                    <table className="table">
	                                        <thead>
	                                            <tr className="border-0">
	                                                <th className="border-0">Company</th>
	                                                <th className="border-0">Campaign Name</th>
	                                                <th className="border-0">Social Platform</th>
	                                                <th className="border-0">Min / Max Views</th>
	                                                <th className="border-0">Status</th>
	                                                <th className="border-0">Start Date</th>
	                                                <th className="border-0">Action</th>
	                                            </tr>
	                                        </thead>
	                                        <tbody>
	                                            <tr>
	                                                <td>
	                                                    <div className="m-r-10"><img src="assets/images/dribbble.png" alt="user" width="35"/></div>
	                                                </td>
	                                                <td>Fashion E Commerce </td>
	                                                <td>
	                                                    <div className="avatar-group">
	                                                        <span><a href="#"><i className="fab fa-fw fa-facebook-square facebook-color"></i></a></span>
	                                                        <span><a href="#"><i className="fab fa-fw fa-twitter-square twitter-color"></i></a></span>
	                                                        <span><a href="#"><i className="fab fa-fw fa-instagram instagram-color"></i></a></span>
	                                                        <span><a href="#"><i className="fab fa-fw fa-pinterest-square pinterest-color"></i></a></span>
	                                                    </div>
	                                                </td>
	                                                <td>1,00,000 / 1,50,000</td>
	                                                <td>70%</td>
	                                                <td>7 Aug,2018</td>
	                                                <td>
	                                                    <div className="dropdown float-right">
	                                                        <a href="#" className="dropdown-toggle card-drop" data-toggle="dropdown" aria-expanded="true">
	                                                                <i className="mdi mdi-dots-vertical"></i>
	                                                                     </a>
	                                                        <div className="dropdown-menu dropdown-menu-right">
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Profit</a>
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Action</a>
	                                                        </div>
	                                                    </div>
	                                                </td>
	                                            </tr>
	                                            <tr>
	                                                <td>
	                                                    <div className="m-r-10"><img src="assets/images/github.png" alt="user" width="35"/></div>
	                                                </td>
	                                                <td>Fitness Products </td>
	                                                <td>
	                                                    <div className="avatar-group">
	                                                        <span><a href="#"><i className="fab fa-fw fa-facebook-square facebook-color "></i></a></span>
	                                                        <span><a href="#"><i className="fab fa-fw fa-twitter-square twitter-color "></i></a></span>
	                                                    </div>
	                                                </td>
	                                                <td>2,50,000 / 3,50,000</td>
	                                                <td>70%</td>
	                                                <td>10 Aug,2018</td>
	                                                <td>
	                                                    <div className="dropdown float-right">
	                                                        <a href="#" className="dropdown-toggle  card-drop" data-toggle="dropdown" aria-expanded="true">
	                                            <i className="mdi mdi-dots-vertical"></i>
	                                        </a>
	                                                        <div className="dropdown-menu dropdown-menu-right">
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Profit</a>
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Action</a>
	                                                        </div>
	                                                    </div>
	                                                </td>
	                                            </tr>
	                                            <tr>
	                                                <td>
	                                                    <div className="m-r-10"><img src="assets/images/dropbox.png" alt="user" width="35"/></div>
	                                                </td>
	                                                <td>Gym Trainer Program </td>
	                                                <td>
	                                                    <div className="avatar-group">
	                                                        <span><a href="#"><i className="fab fa-fw fa-facebook-square facebook-color "></i></a></span>
	                                                        <span><a href="#"><i className="fab fa-fw fa-pinterest-square pinterest-color "></i></a></span>
	                                                    </div>
	                                                </td>
	                                                <td>3,50,000 / 4,50,000</td>
	                                                <td>70%</td>
	                                                <td>22 Aug,2018</td>
	                                                <td>
	                                                    <div className="dropdown float-right">
	                                                        <a href="#" className="dropdown-toggle  card-drop" data-toggle="dropdown" aria-expanded="true">
	                                            <i className="mdi mdi-dots-vertical"></i>
	                                        </a>
	                                                        <div className="dropdown-menu dropdown-menu-right">
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Profit</a>
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Action</a>
	                                                        </div>
	                                                    </div>
	                                                </td>
	                                            </tr>
	                                            <tr>
	                                                <td>
	                                                    <div className="m-r-10"><img src="assets/images/bitbucket.png" alt="user" width="30"/></div>
	                                                </td>
	                                                <td>2018 Top Product </td>
	                                                <td>
	                                                    <div className="avatar-group">
	                                                        <span><a href="#"><i className="fab fa-fw fa-pinterest-square pinterest-color"></i></a></span>
	                                                    </div>
	                                                </td>
	                                                <td>4,50,000 / 5,50,000</td>
	                                                <td>70%</td>
	                                                <td>25 Aug,2018</td>
	                                                <td>
	                                                    <div className="dropdown float-right">
	                                                        <a href="#" className="dropdown-toggle  card-drop" data-toggle="dropdown" aria-expanded="true">
	                                            <i className="mdi mdi-dots-vertical"></i>
	                                        </a>
	                                                        <div className="dropdown-menu dropdown-menu-right">
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Profit</a>
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Action</a>
	                                                        </div>
	                                                    </div>
	                                                </td>
	                                            </tr>
	                                            <tr>
	                                                <td>
	                                                    <div className="m-r-10"><img src="assets/images/mail_chimp.png" alt="user" width="30"/></div>
	                                                </td>
	                                                <td>Top Dashboard Sale 2018</td>
	                                                <td>
	                                                    <div className="avatar-group">
	                                                        <span><a href="#"><i className="fab fa-fw fa-facebook-square facebook-color"></i></a></span>
	                                                        <span><a href="#"><i className="fab fa-fw fa-pinterest-square pinterest-color"></i></a></span>
	                                                    </div>
	                                                </td>
	                                                <td>5,50,000 / 6,50,000</td>
	                                                <td>70%</td>
	                                                <td>27 Aug,2018</td>
	                                                <td>
	                                                    <div className="dropdown float-right">
	                                                        <a href="#" className="dropdown-toggle  card-drop" data-toggle="dropdown" aria-expanded="true">
	                                            <i className="mdi mdi-dots-vertical"></i>
	                                        </a>
	                                                        <div className="dropdown-menu dropdown-menu-right">
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Profit</a>
	                                                            {/* <!-- item--> */}
	                                                            <a href="javascript:void(0);" className="dropdown-item">Action</a>
	                                                        </div>
	                                                    </div>
	                                                </td>
	                                            </tr>
	                                        </tbody>
	                                    </table>
	                                </div>
	                            </div>
	                        </div>
	                        {/* <!-- ============================================================== -->
	                        <!-- end campaign activities   -->
	                        <!-- ============================================================== --> */}
	                    </div>
	                    <div className="row">
	                        <div className="col-lg-12">
	                            <div className="section-block">
	                                <h3 className="section-title">Recommended Campaigns</h3>
	                            </div>
	                        </div>
	                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
	                            <div className="card campaign-card text-center">
	                                <div className="card-body">
	                                    <div className="campaign-img"><img src="assets/images/dribbble.png" alt="user" className="user-avatar-xl"/></div>
	                                        <div className="campaign-info">
	                                            <h3 className="mb-1">Campaigns Name</h3>
	                                            <p className="mb-3">Vestibulum porttitor laoreet faucibus.</p>
	                                            <p className="mb-1">Min, Views:<span className="text-dark font-medium ml-2">2,50,000</span></p>
	                                            <p>Payout: <span className="text-dark font-medium ml-2">$22</span></p>
	                                            <a href="#"><i className="fab fa-twitter-square fa-sm twitter-color"></i> </a><a href="#"><i className="fab fa-snapchat-square fa-sm snapchat-color"></i></a>
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
	                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
	                                <div className="card campaign-card text-center">
	                                    <div className="card-body">
	                                        <div className="campaign-img"><img src="assets/images/github.png" alt="user" className=" user-avatar-xl"/></div>
	                                            <div className="campaign-info">
	                                                <h3 className="mb-1">Campaigns Name</h3>
	                                                <p className="mb-3">Lorem ipsum dolor sit ament</p>
	                                                <p className="mb-1">Min, Views:<span className="text-dark font-medium ml-2">1,00,000</span></p>
	                                                <p>Payout: <span className="text-dark font-medium ml-2">$28</span></p>
	                                                <a href="#"><i className="fab fa-instagram fa-sm instagram-color"></i> </a><a href="#"><i className="fab fa-facebook-square fa-sm facebook-color"></i></a>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>
	                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
	                                    <div className="card campaign-card text-center">
	                                        <div className="card-body">
	                                            <div className="campaign-img"><img src="assets/images/slack.png" alt="user" className="user-avatar-xl"/></div>
	                                                <div className="campaign-info">
	                                                    <h3 className="mb-1">Campaigns Name</h3>
	                                                    <p className="mb-3">Maecenas mattis tempor libero pretium.</p>
	                                                    <p className="mb-1">Min, Views:<span className="text-dark font-medium ml-2">3,80,000</span></p>
	                                                    <p>Payout: <span className="text-dark font-medium ml-2">$36</span></p>
	                                                    <a href="#"><i className="fab fa-facebook-square fa-sm facebook-color"></i> </a><a href="#"><i className="fab fa-snapchat-square fa-sm snapchat-color"></i></a>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
	                                        <div className="card campaign-card text-center">
	                                            <div className="card-body">
	                                                <div className="campaign-img"></div>
	                                                    <div className="campaign-info">
	                                                        <h3 className="mb-1">Campaigns Name</h3>
	                                                        <p className="mb-3">Proin vitae lacinia leo</p>
	                                                        <p className="mb-1">Min, Views:<span className="text-dark font-medium ml-2">4,50,000</span></p>
	                                                        <p>Payout: <span className="text-dark font-medium ml-2">$57</span></p>
	                                                        <a href="#"><i className="fab fa-twitter-square fa-sm twitter-color"></i> </a><a href="#"><i className="fab fa-snapchat-square fa-sm snapchat-color"></i></a>
	                                                        <a href="#"><i className="fab fa-facebook-square fa-sm facebook-color"></i></a>
	                                                    </div>
	                                                </div>
	                                            </div>
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
	
	                  
	                   
        </React.Fragment>
    )
}

export default Infulen ;