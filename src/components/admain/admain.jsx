import { React, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import "../admain/admain.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../jsonfile/admin.json";
import data1 from "../jsonfile/user.json";
import data2 from "../jsonfile/report.json";
import PropTypes from "prop-types";

export default function library() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPages, setCurrentPages] = useState(1);
  const [currentPagesss, setCurrentPagesss] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const startIndexs = (currentPages - 1) * itemsPerPage;
  const startIndexsss = (currentPagesss - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const endIndexs = startIndexs + itemsPerPage;
  const endIndexsss = startIndexsss + itemsPerPage;

  const datas = data["games_data_adjusted"];
  const datac = data1["user_data"];
  const datad = data2["report_data"];
  const displayedItem = datas.slice(startIndex, endIndex);
  const displayedItems = datac.slice(startIndexs, endIndexs);
  const displayedItemsss = datad.slice(startIndexsss, endIndexsss);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handlePrevPages1 = () => {
    if (currentPages > 1) {
      setCurrentPages(currentPages - 1);
    }
  };
  const handlePrevPages2 = () => {
    if (currentPagesss > 1) {
      setCurrentPagesss(currentPagesss - 1);
    }
  };

  const handleNextPage = () => {
    if (endIndex < datas.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleNextPages1 = () => {
    if (endIndexs < datac.length) {
      setCurrentPages(currentPages + 1);
    }
  };
  const handleNextPages2 = () => {
    if (endIndexsss < datad.length) {
      setCurrentPagesss(currentPagesss + 1);
    }
  };
  return (
    <div>
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

      <div>
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
                              <th scope="col">Tel user</th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {displayedItems.map((data1, i) => (
                              <tr>
                                <th scope="row">{data1.id}</th>
                                <td>{data1.name}</td>
                                <td>{data1.gemail}</td>
                                <td>{data1.username}</td>
                                <td>{data1.tel}</td>
                                <td>
                                  <button className="btn btn-sm btn-primary">
                                    View
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="fonta">
          <div
            style={{
              fontSize: "40px",
              position: "absolute",
              bottom: "15px",
              left: "50%", // Adjusted left to center horizontally
              transform: "translateX(-50%)", // Center the element horizontally
              top: "630px",
            }}
          >
            <button
              type="button"
              className="btn  btn-primary"
              onClick={handlePrevPages1}
              disabled={currentPages === 1}
            >
              Prev
            </button>
            <button
              type="button"
              class="btn  btn-success"
              onClick={handleNextPages1}
              disabled={endIndexs >= datac.length}
            >
              Next
            </button>
          </div>
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
                              <th scope="col">Game price</th>
                              <th scope="col">Category</th>
                              <th scope="col">Date time</th>
                              <th scope="col"></th>
                              <th></th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {displayedItem.map((data, i) => (
                              <tr>
                                <th scope="row">{data.name}</th>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>{data.release}</td>
                                <td>{data.release}</td>
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
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div
          style={{
            fontSize: "40px",
            position: "absolute",
            left: "49%", // Adjusted left to center horizontally
            transform: "translateX(-50%)", // Center the element horizontally
            top: "1260px",
            padding: "5px 0px 60px 50px",
          }}
        >
          <button
            type="button"
            className="btn  btn-primary"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            type="button"
            class="btn  btn-success"
            onClick={handleNextPage}
            disabled={endIndex >= datas.length}
          >
            Next
          </button>
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
            className="greadient3-library"
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
                              <th scope="col">Problem</th>
                              <th scope="col">Detalis</th>
                              <th scope="col">Comment</th>
                              <th scope="col"></th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {displayedItemsss.map((data2, i) => (
                              <tr>
                                <th scope="row">{data2.problem}</th>
                                <td>{data2.detalis}</td>
                                <td>{data2.comment}</td>

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
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div
          style={{
            fontSize: "40px",
            position: "absolute",
            left: "49%", // Adjusted left to center horizontally
            transform: "translateX(-50%)", // Center the element horizontally
            top: "1900px",
            padding: "5px 0px 60px 50px",
          }}
        >
          <button
            type="button"
            className="btn  btn-primary"
            onClick={handlePrevPages2}
            disabled={currentPagesss === 1}
          >
            Prev
          </button>
          <button
            type="button"
            class="btn  btn-success"
            onClick={handleNextPages2}
            disabled={endIndexsss >= datad.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
