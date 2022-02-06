import { Request, Response } from "express";

const ssoResponse = (_req: Request, res: Response) => {
  res.send(
    `<p> logged in successful </p> 
    <script>
    setTimeout(() => {
        window.close() 
    }, 500);
    </script>
    `
  );
};

export default ssoResponse;
