'use client';
import { useRouter } from 'next/navigation';

export default function AdminHomePage() {
  const router = useRouter();

  // Sidebar links
  const sidebarLinks = [
    { section: "Dashboard", items: [
      { title: "Dashboard", icon: "fas fa-home", href: "/" }
    ]},
    { section: "Pages", items: [
      { title: "Tickets", icon: "fas fa-ticket-alt", href: "/tickets" },
      { title: "Users", icon: "fas fa-users", href: "/users" }
    ]},
    { section: "Settings", items: [
      { title: "Profile", icon: "fas fa-user-cog", href: "/profile" },
      { title: "Logout", icon: "fas fa-sign-out-alt", href: "/logout" }
    ]}
  ];

  // Dashboard cards
  const dashboardCards = [
    {
      gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
      value: "15,000",
      label: "Weekly Sales",
      icon: "fas fa-chart-line",
      sub: "Increased by 60%"
    },
    {
      gradient: "linear-gradient(135deg, #21d4fd 0%, #b721ff 100%)",
      value: "45,6334",
      label: "Weekly Orders",
      icon: "fas fa-shopping-cart",
      sub: "Decreased by 10%"
    },
    {
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      value: "95,5741",
      label: "Visitors Online",
      icon: "fas fa-users",
      sub: "Increased by 5%"
    }
  ];

  // Recent tickets (mock data)
  const recentTickets = [
    {
      assignee: "David Grey",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      subject: "Fund is not received",
      status: "DONE",
      statusColor: "success",
      lastUpdate: "Dec 5, 2017",
      id: "WD-12345"
    },
    {
      assignee: "Stella Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      subject: "High loading time",
      status: "PROGRESS",
      statusColor: "warning",
      lastUpdate: "Dec 12, 2017",
      id: "WD-12346"
    },
    {
      assignee: "Marina Michel",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      subject: "Website down for one week",
      status: "ON HOLD",
      statusColor: "info",
      lastUpdate: "Dec 16, 2017",
      id: "WD-12347"
    },
    {
      assignee: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      subject: "Losing control on server",
      status: "REJECTED",
      statusColor: "danger",
      lastUpdate: "Dec 3, 2017",
      id: "WD-12348"
    }
  ];

  return (
    <div className="d-flex" style={{ minHeight: "100vh", background: "#f8f6fc" }}>
      {/* Sidebar */}
      <aside className="bg-white border-end" style={{ width: 260 }}>
        <div className="p-4 border-bottom d-flex align-items-center">
          <i className="fas fa-layer-group fa-2x text-primary me-2"></i>
          <span className="fw-bold fs-4" style={{ color: "#a259ff" }}>ResolvePro</span>
        </div>
        <nav>
          {sidebarLinks.map(section => (
            <div key={section.section} className="mt-4">
              <div className="text-muted text-uppercase px-4 mb-2" style={{ fontSize: 12 }}>{section.section}</div>
              <ul className="nav flex-column">
                {section.items.map(link => (
                  <li className="nav-item" key={link.title}>
                    <a
                      className="nav-link px-4 py-2 d-flex align-items-center rounded"
                      style={{ color: "#7c6ae6", cursor: "pointer" }}
                      onClick={() => router.push(link.href)}
                    >
                      <i className={`${link.icon} me-2`}></i>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Topbar */}
        <header className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom bg-white">
          <div className="input-group w-50 rounded" style={{ background: "#f3eaff" }}>
            <span className="input-group-text bg-transparent border-0"><i className="fas fa-search"></i></span>
            <input type="text" className="form-control border-0 bg-transparent" placeholder="Search projects..." />
          </div>
          <div className="d-flex align-items-center gap-3">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="rounded-circle" width={36} height={36} />
            <span className="fw-bold" style={{ color: "#a259ff" }}>David Greymaax</span>
            <i className="fas fa-bell fa-lg text-muted" style={{ cursor: "pointer" }}></i>
          </div>
        </header>

        {/* Dashboard */}
        <main className="p-4">
          <div className="row g-4 mb-4">
            {dashboardCards.map(card => (
              <div className="col-md-4" key={card.label}>
                <div className="card border-0 shadow-sm" style={{
                  background: card.gradient,
                  color: "#fff",
                  borderRadius: 20,
                  minHeight: 140
                }}>
                  <div className="card-body d-flex flex-column justify-content-between h-100">
                    <div className="d-flex align-items-center">
                      <i className={`${card.icon} fa-2x me-3`}></i>
                      <div>
                        <div className="fs-3 fw-bold">{card.value}</div>
                        <div className="fw-semibold">{card.label}</div>
                      </div>
                    </div>
                    <div className="mt-3" style={{ fontSize: 14 }}>{card.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart and Recent Tickets */}
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: 20 }}>
                <div className="card-header bg-white fw-bold" style={{ borderRadius: "20px 20px 0 0" }}>Visit And Sales Statistics</div>
                <div className="card-body" style={{ minHeight: 250 }}>
                  {/* Replace with your chart component */}
                  <span className="text-muted">[Chart Placeholder]</span>
                </div>
              </div>
              <div className="card border-0 shadow-sm" style={{ borderRadius: 20 }}>
                <div className="card-header bg-white fw-bold" style={{ borderRadius: "20px 20px 0 0" }}>Recent Tickets</div>
                <div className="card-body p-0">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th>Assignee</th>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Last Update</th>
                        <th>Tracking ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTickets.map(ticket => (
                        <tr key={ticket.id}>
                          <td>
                            <img src={ticket.avatar} alt={ticket.assignee} className="rounded-circle me-2" width={32} height={32} />
                            {ticket.assignee}
                          </td>
                          <td>{ticket.subject}</td>
                          <td>
                            <span className={`badge bg-${ticket.statusColor}`}>{ticket.status}</span>
                          </td>
                          <td>{ticket.lastUpdate}</td>
                          <td>{ticket.id}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Right Panel (optional widgets) */}
            <div className="col-lg-4">
              {/* Add widgets or quick actions here if needed */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}