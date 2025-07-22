'use client';
export default function BootstrapForm() {
  return (
    <div className="container-fluid bg-gradient-primary" style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      padding: '2rem 0'
    }}>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg o-hidden border-0">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">
                <i className="fas fa-edit mr-2"></i>
                Formulaire Avancé
              </h3>
            </div>
            
            <div className="card-body" style={{backgroundColor: '#f8f9fa'}}>
              {/* Section 1 - Contrôles de base */}
              <div className="mb-5 p-4 bg-white rounded border">
                <h5 className="text-primary mb-3">
                  <i className="fas fa-edit mr-2"></i>
                  Contrôles de formulaire
                </h5>
                <hr className="border-primary" />
                
                <div className="row">
                  <div className="col-md-6 border-right pr-4">
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="font-weight-bold">Email</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">
                            <i className="fas fa-envelope text-muted"></i>
                          </span>
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="exampleInputEmail1"
                            placeholder="votre@email.com"
                          />
                        </div>
                        <small className="form-text text-info">
                          <i className="fas fa-info-circle mr-1"></i>
                          Nous ne partagerons jamais votre email
                        </small>
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="font-weight-bold">Mot de passe</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">
                            <i className="fas fa-lock text-muted"></i>
                          </span>
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="exampleInputPassword1"
                            placeholder="••••••••"
                          />
                        </div>
                      </div>

                      <div className="form-group form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                          style={{accentColor: '#667eea'}}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                          Se souvenir de moi
                        </label>
                      </div>

                      <button 
                        type="submit" 
                        className="btn btn-primary btn-lg w-100 fw-bold py-3"
                        style={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          border: 'none',
                          transition: 'all 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.opacity = '0.9'}
                        onMouseOut={(e) => e.target.style.opacity = '1'}
                      >
                        <i className="fas fa-paper-plane mr-2"></i>
                        Soumettre
                      </button>
                    </form>
                  </div>

                  <div className="col-md-6 pl-4">
                    <form>
                      <div className="form-group">
                        <label className="font-weight-bold">Texte</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">
                            <i className="fas fa-font text-muted"></i>
                          </span>
                          <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Saisissez du texte" 
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1" className="font-weight-bold">Sélection</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">
                            <i className="fas fa-list text-muted"></i>
                          </span>
                          <select className="form-control form-control-lg" id="exampleFormControlSelect1">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                            <option>Option 5</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1" className="font-weight-bold">Zone de texte</label>
                        <textarea
                          className="form-control form-control-lg"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Votre message..."
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Section 2 - Tailles */}
              <div className="mb-5 p-4 bg-white rounded border">
                <h5 className="text-primary mb-3">
                  <i className="fas fa-arrows-alt-v mr-2"></i>
                  Options de taille
                </h5>
                <hr className="border-primary" />
                
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-text-height text-muted"></i>
                      </span>
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Grand (.form-control-lg)"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-text-height text-muted"></i>
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Taille par défaut"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-text-height text-muted"></i>
                      </span>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="Petit (.form-control-sm)"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-list text-muted"></i>
                      </span>
                      <select className="form-control form-control-lg">
                        <option>Sélection large</option>
                      </select>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-list text-muted"></i>
                      </span>
                      <select className="form-control">
                        <option>Sélection normale</option>
                      </select>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-list text-muted"></i>
                      </span>
                      <select className="form-control form-control-sm">
                        <option>Sélection petite</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 - Contrôles spéciaux */}
              <div className="mb-5 p-4 bg-white rounded border">
                <h5 className="text-primary mb-3">
                  <i className="fas fa-sliders-h mr-2"></i>
                  Contrôles spéciaux
                </h5>
                <hr className="border-primary" />
                
                <div className="form-group">
                  <label htmlFor="formControlRange" className="font-weight-bold">Curseur de plage</label>
                  <input 
                    type="range" 
                    className="form-control-range custom-range" 
                    id="formControlRange" 
                    style={{color: '#667eea'}}
                  />
                </div>
              </div>

              {/* Section 4 - Formulaire en ligne */}
              <div className="p-4 bg-white rounded border">
                <h5 className="text-primary mb-3">
                  <i className="fas fa-align-left mr-2"></i>
                  Formulaire en ligne
                </h5>
                <hr className="border-primary" />
                
                <form className="form-inline bg-light p-3 rounded">
                  <div className="form-group mb-2 mr-2">
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-envelope text-muted"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form-group mx-sm-3 mb-2">
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-lock text-muted"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Mot de passe"
                      />
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary mb-2 fw-bold"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      transition: 'all 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.opacity = '0.9'}
                    onMouseOut={(e) => e.target.style.opacity = '1'}
                  >
                    <i className="fas fa-check mr-2"></i>
                    Confirmer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}