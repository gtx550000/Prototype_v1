import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import '../Second/second.css';

export default function IntroDivider() {
  return (
    <div>
      <div className="second">
        <Card
          variant="outlined"
          sx={{ m: 1.5, maxWidth: 360 }}
          style={{ padding: '10px 30px 10px 30px' }}
          className="center"
        >
          <Box sx={{ p: 2, width: 'content' }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography gutterBottom variant="h5" component="div">
                Standard Edition
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                $5.50
              </Typography>
            </Stack>
            <Typography color="text.secondary" variant="body2">
              Increase your games visibility for 24 hours. Visibility of 100-500
              people.
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              Select type
            </Typography>

            <FormControlLabel
              required
              control={<Checkbox />}
              label="Standard"
            />
            <FormControlLabel
              disabled
              control={<Checkbox />}
              label=" *+0.50 Deluxe Edition* "
            />
          </Box>
        </Card>
      </div>

      <div>
        <Card
          variant="outlined"
          sx={{ m: 1.5, maxWidth: 360 }}
          style={{ padding: '10px 30px 30px 30px' }}
        >
          <Box sx={{ p: 2 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography gutterBottom variant="h5" component="div">
                Deluxe Edition
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                $10.50
              </Typography>
            </Stack>
            <Typography color="text.secondary" variant="body2">
              Increase your games visibility for 48 hours. Visibility of
              500-1000 people.
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              Select type
            </Typography>

            <FormControlLabel required control={<Checkbox />} label="Deluxe" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="+0.50 free 1 hours"
            />
          </Box>
        </Card>
      </div>

      <div>
        <Card
          variant="outlined"
          sx={{ m: 1.5, maxWidth: 360 }}
          style={{ padding: '10px 30px 30px 30px' }}
        >
          <Box sx={{ p: 2 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography gutterBottom variant="h5" component="div">
                Ultimate Edition
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                $30.50
              </Typography>
            </Stack>
            <Typography color="text.secondary" variant="body2">
              Your game will be ranked among the top new games. for 48 hours.
              Visibility of 1000-1500 people.
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              Select type
            </Typography>

            <FormControlLabel
              required
              control={<Checkbox />}
              label="Ultimate"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="+0.50 free 1 hours"
            />
          </Box>
        </Card>
      </div>
    </div>
  );
}
