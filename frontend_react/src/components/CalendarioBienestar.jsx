
import "../styles/DiarioContenido.css";


const CalendarioBienestar = () => {
    return (
         <div className="col-8 col-md-3">
            <div className="calendar-card">
                <div className="calendar-title">Calendario de bienestar</div>
                <div className="calendar-grid">
                <div className="calendar-day-header">D</div>
                <div className="calendar-day-header">L</div>
                <div className="calendar-day-header">M</div>
                <div className="calendar-day-header">M</div>
                <div className="calendar-day-header">J</div>
                <div className="calendar-day-header">V</div>
                <div className="calendar-day-header">S</div>
                <div className="calendar-day other-month">29</div>
                <div className="calendar-day other-month">30</div>
                <div className="calendar-day other-month">31</div>
                <div className="calendar-day">1</div>
                <div className="calendar-day">2</div>
                <div className="calendar-day">3</div>
                <div className="calendar-day">4</div>
                <div className="calendar-day">5</div>
                <div className="calendar-day">6</div>
                <div className="calendar-day">7</div>
                <div className="calendar-day">8</div>
                <div className="calendar-day">9</div>
                <div className="calendar-day">10</div>
                <div className="calendar-day">11</div>
                <div className="calendar-day">12</div>
                <div className="calendar-day">13</div>
                <div className="calendar-day">14</div>
                <div className="calendar-day active">15</div>
                <div className="calendar-day">16</div>
                <div className="calendar-day">17</div>
                <div className="calendar-day">18</div>
                <div className="calendar-day">19</div>
                <div className="calendar-day">20</div>
                <div className="calendar-day">21</div>
                <div className="calendar-day">22</div>
                <div className="calendar-day">23</div>
                <div className="calendar-day">24</div>
                <div className="calendar-day">25</div>
                <div className="calendar-day">26</div>
                <div className="calendar-day">27</div>
                <div className="calendar-day">28</div>
                <div className="calendar-day other-month">1</div>
                <div className="calendar-day other-month">2</div>
            </div>
        </div>
  <div className="progress-card">
    <div className="progress-title">Progreso del Día</div>
    <div className="progress-bar" id="progressBar">
      <div className="progress-text" id="progressText">
        0/3
      </div>
    </div>
    <div id="progressMessage">¡Comienza tu día saludable!</div>
  </div>
</div>
    
    )
}

export default CalendarioBienestar;