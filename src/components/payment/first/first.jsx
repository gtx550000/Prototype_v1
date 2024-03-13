import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "../first/banks.css";
import "../first/first.css";
import { useState } from "react";

export default function IntroDivider() {
  const [content, setContent] = useState("");

  return (
    <div
      style={{
        padding: "30px 0px 3px 50px",
      }}
    >
      <Box
        sx={{
          width: "80%",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Repeat the same structure for other cards */}
        <Card
          variant="outlined"
          sx={{
            width: "80%", // Adjusted width for responsiveness (assuming equal width for all three cards)
            marginBottom: "20px",
            padding: "20px 30px",
            textAlign: "center",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>
              <Typography gutterBottom variant="h5" component="div">
                <i className="bank bank-bbl"></i>
                Bangkok Bank
              </Typography>
            </div>
          </Stack>
          <Typography color="text.secondary" variant="body2">
            We will transfer the money to Bangkok Bank. Please select to
            confirm.
          </Typography>

          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              Select
            </Typography>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Bangkok Bank"
            />
          </Box>
        </Card>

        {/* Repeat the same structure for other two cards with variant="outlined" and same sx={{...}}  */}
      </Box>

      <Box
        sx={{
          width: "80%",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Repeat the same structure for other cards */}
        <Card
          variant="outlined"
          sx={{
            width: "80%", // Adjusted width for responsiveness (assuming equal width for all three cards)
            marginBottom: "20px",
            padding: "20px 30px",
            textAlign: "center",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>
              <Typography gutterBottom variant="h5" component="div">
                <i className="bank bank-kbank"></i>K bank
              </Typography>
            </div>
          </Stack>
          <Typography color="text.secondary" variant="body2">
            We will transfer the money to K bank. Please select to confirm.
          </Typography>

          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              Select
            </Typography>
            <FormControlLabel required control={<Checkbox />} label="K bank" />
          </Box>
        </Card>

        {/* Repeat the same structure for other two cards with variant="outlined" and same sx={{...}}  */}
      </Box>

      <Box
        sx={{
          width: "80%",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Repeat the same structure for other cards */}
        <Card
          variant="outlined"
          sx={{
            width: "80%", // Adjusted width for responsiveness (assuming equal width for all three cards)
            marginBottom: "20px",
            padding: "20px 30px",
            textAlign: "center",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>
              <Typography gutterBottom variant="h5" component="div">
                <i className="bank bank-ktb"></i>
                Krung Thai Bank
              </Typography>
            </div>
          </Stack>
          <Typography color="text.secondary" variant="body2">
            We will transfer the money to Krung Thai Bank. Please select to
            confirm.
          </Typography>

          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              Select
            </Typography>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Krung Thai Bank"
            />
          </Box>
        </Card>

        {/* Repeat the same structure for other two cards with variant="outlined" and same sx={{...}}  */}
      </Box>

      <Box
        sx={{
          width: "80%",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Repeat the same structure for other cards */}

        <Card
          variant="outlined"
          sx={{
            width: "80%", // Adjusted width for responsiveness (assuming equal width for all three cards)
            marginBottom: "20px",
            padding: "20px 30px",
            textAlign: "center",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>
              <Typography gutterBottom variant="h5" component="div">
                <i className="bank bank-bay"></i>
                Bank of Ayudhya
              </Typography>
            </div>
          </Stack>
          <Typography color="text.secondary" variant="body2">
            We will transfer the money to Bank of Ayudhya. Please select to
            confirm.
          </Typography>

          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              Select
            </Typography>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Bank of Ayudhya"
            />
          </Box>
        </Card>

        {/* Repeat the same structure for other two cards with variant="outlined" and same sx={{...}}  */}

        <Card
          variant="outlined"
          sx={{
            width: "80%", // Adjusted width for responsiveness (assuming equal width for all three cards)
            marginBottom: "20px",
            padding: "20px 30px",
            textAlign: "center",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>
              <Typography gutterBottom variant="h5" component="div">
                <i className="bank bank-scb"></i>
                Siam Commercial Bank
              </Typography>
            </div>
          </Stack>
          <Typography color="text.secondary" variant="body2">
            We will transfer the money to Siam Commercial Bank. Please select to
            confirm.
          </Typography>

          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              Select
            </Typography>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Siam Commercial Bank"
            />
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            width: "80%", // Adjusted width for responsiveness (assuming equal width for all three cards)
            marginBottom: "20px",
            padding: "20px 30px",
            textAlign: "center",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>
              <Typography gutterBottom variant="h5" component="div">
                <i className="bank bank-gsb"></i>
                Savings bank
              </Typography>
            </div>
          </Stack>
          <Typography color="text.secondary" variant="body2">
            We will transfer the money to Savings bank. Please select to
            confirm.
          </Typography>

          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              Select
            </Typography>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Savings bank"
            />
          </Box>
        </Card>
      </Box>
    </div>
  );
}
