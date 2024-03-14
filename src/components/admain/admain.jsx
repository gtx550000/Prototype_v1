import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import "../admain/admain.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function library() {
  return (
    <div className="">
      <div
        style={{
          fontSize: "40px",
          position: "absolute",
          bottom: "15px",
          left: "50%", // Adjusted left to center horizontally
          transform: "translateX(-50%)", // Center the element horizontally
          top: "100px",
        }}
      >
        Admin Page
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
          padding: "10px 0px 3px 50px",
        }}
      >
        <Card
          sx={{ height: 60 + "", width: 140 + "vh" }}
          className="greadient2-library"
        >
          <CardContent>
            <div class="">
              <div class="">
                <div class="">
                  <h5 class="">View User</h5>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">ID user</th>
                            <th scope="col">Name user</th>
                            <th scope="col">Gmail user</th>
                            <th scope="col">User name</th>
                            <th scope="col">Phone numer user</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">17371705</th>
                            <td>Volt Premium Bootstrap 5 Dashboard</td>
                            <td>johndoe@gmail.com</td>
                            <td>€61.11</td>
                            <td>Aug 31 2020</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                View
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">17370540</th>
                            <td>Pixel Pro Premium Bootstrap UI Kit</td>
                            <td>jacob.monroe@company.com</td>
                            <td>$153.11</td>
                            <td>Aug 28 2020</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                View
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">17371705</th>
                            <td>Volt Premium Bootstrap 5 Dashboard</td>
                            <td>johndoe@gmail.com</td>
                            <td>€61.11</td>
                            <td>Aug 31 2020</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                View
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">17370540</th>
                            <td>Pixel Pro Premium Bootstrap UI Kit</td>
                            <td>jacob.monroe@company.com</td>
                            <td>$153.11</td>
                            <td>Aug 28 2020</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                View
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">17371705</th>
                            <td>Volt Premium Bootstrap 5 Dashboard</td>
                            <td>johndoe@gmail.com</td>
                            <td>€61.11</td>
                            <td>Aug 31 2020</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                View
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">17370540</th>
                            <td>Pixel Pro Premium Bootstrap UI Kit</td>
                            <td>jacob.monroe@company.com</td>
                            <td>$153.11</td>
                            <td>Aug 28 2020</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                View
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <a href="#" class="btn btn-library">
                      View all
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "",
          padding: "5px 0px 60px 50px",
        }}
      >
        <Card
          sx={{ height: 60 + "", width: 140 + "vh" }}
          className="greadient1-library"
        >
          <CardContent>
            <div class="">
              <div class="">
                <div class="">
                  <h5 class="">View Game</h5>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Name game</th>
                            <th scope="col">Name team</th>
                            <th scope="col">Game rates</th>
                            <th scope="col">Category</th>
                            <th scope="col">Date time</th>
                            <th scope="col"></th>
                            <th></th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">17371705</th>
                            <td>Volt Premium Bootstrap 5 Dashboard</td>
                            <td>johndoe@gmail.com</td>
                            <td>€61.11</td>
                            <td>Aug 31 2020</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                View
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-sm btn-danger">
                                Delete
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-sm btn-success">
                                Approve
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">17370540</th>
                            <td>Pixel Pro Premium Bootstrap UI Kit</td>
                            <td>jacob.monroe@company.com</td>
                            <td>$153.11</td>
                            <td>Aug 28 2020</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                View
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-sm btn-danger">
                                Delete
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-sm btn-success">
                                Approve
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">17371705</th>
                            <td>Volt Premium Bootstrap 5 Dashboard</td>
                            <td>johndoe@gmail.com</td>
                            <td>€61.11</td>
                            <td>Aug 31 2020</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                View
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-sm btn-danger">
                                Delete
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-sm btn-success">
                                Approve
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">17370540</th>
                            <td>Pixel Pro Premium Bootstrap UI Kit</td>
                            <td>jacob.monroe@company.com</td>
                            <td>$153.11</td>
                            <td>Aug 28 2020</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                View
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-sm btn-danger">
                                Delete
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-sm btn-success">
                                Approve
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">17371705</th>
                            <td>Volt Premium Bootstrap 5 Dashboard</td>
                            <td>johndoe@gmail.com</td>
                            <td>€61.11</td>
                            <td>Aug 31 2020</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                View
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-sm btn-danger">
                                Delete
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-sm btn-success">
                                Approve
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">17370540</th>
                            <td>Pixel Pro Premium Bootstrap UI Kit</td>
                            <td>jacob.monroe@company.com</td>
                            <td>$153.11</td>
                            <td>Aug 28 2020</td>
                            <td>
                              <a href="#" class="btn btn-sm btn-primary">
                                View
                              </a>
                            </td>
                            <td>
                              <button className="btn btn-sm btn-danger">
                                Delete
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-sm btn-success">
                                Approve
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <a href="#" class="btn btn-library">
                      View all
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
