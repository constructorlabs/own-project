import React from "react";

class History extends React.Component {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div className="history-container">
        {this.props.all.map(student => {
          const temp = Object.keys(student.counters).map(key => {
            return (
              
              <div key={key}>
                <p > {key} {student.counters[key]} times </p>
              </div>
            );
          });
          return (
            <div className="history-container__box" key={student.name}>
              <h2>{student.name} Paired with</h2>
              {temp}
            </div>
          )
        })}
      </div>
    );
  }
}

export default History;
