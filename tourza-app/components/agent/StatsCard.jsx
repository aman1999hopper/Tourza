import { Card, CardContent } from "@/components/ui/card";

export default function StatsCard({ title, value, description, icon: Icon }) {
  return (
     <Card>
      <CardContent className="p-6 flex items-start gap-4">
        {Icon && (
          <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
            <Icon size={20} />
          </div>
        )}

        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h2 className="text-3xl font-bold mt-1">{value}</h2>
          <p className="text-xs text-muted-foreground mt-1">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
